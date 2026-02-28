<template>
  <div class="page contact-page">
    <AppHeader />

    <main class="site-main" role="main">
      <div class="panel" aria-label="contact panel">
        <div class="panel-head">
          <div class="panel-title">
            <h1>お問い合わせ</h1>
            <p>入力→判定→送信→完了まで、同一画面内の“状態遷移”でスムーズに見せます。</p>
          </div>
          <div class="kbd">Contact</div>
        </div>

        <div class="panel-body">
          <form @submit.prevent="submit" style="display: grid; gap: 12px;">
            <div>
              <div class="muted" style="font-size: 12px; margin-bottom: 8px;">お名前</div>
              <input class="input" v-model.trim="name" @blur="precheck" />
              <div v-if="errors.name" class="err">{{ errors.name }}</div>
            </div>

            <div>
              <div class="muted" style="font-size: 12px; margin-bottom: 8px;">メール</div>
              <input class="input" v-model.trim="email" @blur="precheck" />
              <div v-if="errors.email" class="err">{{ errors.email }}</div>
            </div>

            <div>
              <div class="muted" style="font-size: 12px; margin-bottom: 8px;">内容</div>
              <textarea class="textarea" v-model.trim="message" @blur="precheck"></textarea>
              <div v-if="errors.message" class="err">{{ errors.message }}</div>
              <div v-else-if="hint" :class="hintClass" style="font-size: 12px; margin-top: 8px;">{{ hint }}</div>
            </div>

            <!-- honeypot -->
            <input v-model="honeypot" tabindex="-1" autocomplete="off" style="position: absolute; left: -9999px; opacity: 0;" />

            <!-- Turnstile -->
            <div style="display: grid; gap: 8px;">
              <div class="muted" style="font-size: 12px;">送信前チェック（Turnstile）</div>
              <div
                class="cf-turnstile"
                :data-sitekey="siteKey"
                data-theme="light"
                data-size="flexible"
                data-callback="onTurnstileSuccess"
                data-expired-callback="onTurnstileExpired"
                data-error-callback="onTurnstileError"
              ></div>
              <div v-if="turnstileError" class="err">{{ turnstileError }}</div>
            </div>

            <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <button class="btn primary" type="submit" :disabled="submitting || !canSubmit || !turnstileToken">
                {{ submitting ? "Sending..." : "送信する" }}
              </button>
              <RouterLink class="btn" to="/">戻る</RouterLink>
              <span class="muted" style="font-size: 12px;">{{ status }}</span>
            </div>

            <div class="muted" style="font-size: 12px; line-height: 1.7;">
              ※ 送信時はサーバ側で Turnstile 検証・レート制限・メール送信を実施します。
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";

const router = useRouter();

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

const name = ref("");
const email = ref("");
const message = ref("");
const honeypot = ref("");

const submitting = ref(false);
const status = ref("");
const hint = ref<"" | string>("");
const hintClass = ref<"ok" | "warn">("ok");

const errors = reactive<{ name?: string; email?: string; message?: string }>({});

const turnstileToken = ref<string>("");
const turnstileError = ref<string>("");

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileExpired?: () => void;
    onTurnstileError?: () => void;
  }
}

window.onTurnstileSuccess = (token: string) => {
  turnstileToken.value = token;
  turnstileError.value = "";
};

window.onTurnstileExpired = () => {
  turnstileToken.value = "";
  turnstileError.value = "認証が期限切れです。もう一度お試しください。";
};

window.onTurnstileError = () => {
  turnstileToken.value = "";
  turnstileError.value = "認証に失敗しました。通信環境をご確認ください。";
};

function ensurePageVisible() {
  document.body.classList.add("page-open");
  document.body.classList.add("is-ready");
  document.body.classList.remove("is-loading");
  document.body.classList.remove("nav-open");
}

onMounted(() => {
  ensurePageVisible();
});

function validateSoft() {
  errors.name = !name.value ? "お名前を入力してください" : undefined;

  if (!email.value) {
    errors.email = "メールを入力してください";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = "メール形式が正しくありません";
  } else {
    errors.email = undefined;
  }

  if (!message.value) {
    errors.message = "内容を入力してください";
  } else if (message.value.length < 10) {
    errors.message = "内容が短すぎます（10文字以上）";
  } else {
    errors.message = undefined;
  }

  return !errors.name && !errors.email && !errors.message;
}

const canSubmit = computed(() => validateSoft());

let precheckTimer: number | null = null;
async function precheck() {
  if (precheckTimer) window.clearTimeout(precheckTimer);
  precheckTimer = window.setTimeout(async () => {
    hint.value = "";
    status.value = "";
    validateSoft();

    if (!email.value || !message.value) return;

    try {
      const res = await fetch("/api/inquiry/precheck", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value
        })
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data) return;

      if (data.level === "ok") {
        hint.value = data.message || "送信できます。";
        hintClass.value = "ok";
      } else {
        hint.value = data.message || "内容をもう少し具体的にすると伝わりやすいです。";
        hintClass.value = "warn";
      }
    } catch {
      // ignore
    }
  }, 350);
}

async function submit() {
  status.value = "";
  hint.value = "";

  if (!siteKey) {
    status.value = "Turnstile の設定が未完了です。";
    return;
  }
  if (!turnstileToken.value) {
    status.value = "認証が必要です（Turnstile）。";
    return;
  }
  if (honeypot.value) {
    status.value = "送信できませんでした。";
    return;
  }

  const ok = validateSoft();
  if (!ok) {
    status.value = "入力内容を確認してください。";
    return;
  }

  submitting.value = true;
  status.value = "送信しています…";

  try {
    const res = await fetch("/api/inquiry/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        honeypot: honeypot.value,
        turnstileToken: turnstileToken.value,
        clientTs: Date.now()
      })
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      status.value = data?.error ? data.error : "送信に失敗しました。";
      return;
    }

    status.value = "送信しました。";
    router.push({ name: "done" });
  } catch {
    status.value = "送信に失敗しました。時間をおいて再度お試しください。";
  } finally {
    submitting.value = false;
  }
}
</script>