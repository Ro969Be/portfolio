<template>
  <div class="page contact-page">
    <AppHeader />

    <main class="site-main" role="main">
      <!-- =========================
           FORM PANEL
      ========================== -->
      <div v-if="step === 'form'" class="panel" aria-label="contact panel">
        <div class="panel-head">
          <div class="panel-title">
            <h1>お問い合わせ</h1>
            <p class="sub-title">CONTACT</p>
          </div>
        </div>

        <div class="panel-body">
          <div class="card">
            <div class="card-inner" style="display: grid; gap: 14px;">
              <!-- Name -->
              <div style="display: grid; gap: 8px;">
                <label for="c_name" class="muted" style="font-size: 12px;">お名前</label>
                <input
                  id="c_name"
                  class="input"
                  v-model.trim="form.name"
                  type="text"
                  autocomplete="name"
                  :aria-invalid="touched.name && !!errors.name"
                  :disabled="sending"
                  @blur="touch('name')"
                />
                <div v-if="touched.name && errors.name" class="err">{{ errors.name }}</div>
              </div>

              <!-- Email -->
              <div style="display: grid; gap: 8px;">
                <label for="c_email" class="muted" style="font-size: 12px;">メール</label>
                <input
                  id="c_email"
                  class="input"
                  v-model.trim="form.email"
                  type="email"
                  autocomplete="email"
                  inputmode="email"
                  :aria-invalid="touched.email && !!errors.email"
                  :disabled="sending"
                  @blur="touch('email')"
                />
                <div v-if="touched.email && errors.email" class="err">{{ errors.email }}</div>
              </div>

              <!-- Message -->
              <div style="display: grid; gap: 8px;">
                <label for="c_message" class="muted" style="font-size: 12px;">内容</label>
                <textarea
                  id="c_message"
                  class="textarea"
                  v-model.trim="form.message"
                  :aria-invalid="touched.message && !!errors.message"
                  :disabled="sending"
                  @blur="touch('message')"
                ></textarea>
                <div v-if="touched.message && errors.message" class="err">{{ errors.message }}</div>
              </div>

              <!-- Turnstile -->
              <div style="display: grid; gap: 8px;">
                <div class="muted" style="font-size: 12px;">送信前チェック</div>

                <!-- widget -->
                <div
                  ref="turnstileMount"
                  style="
                    min-height: 65px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                  "
                ></div>

                <div v-if="errors.turnstile" class="err">{{ errors.turnstile }}</div>
              </div>

              <div class="hr"></div>

              <!-- Actions -->
              <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                <button class="btn primary" type="button" :disabled="sending || !canSubmit" @click="submit">
                  <span v-if="sending">送信中…</span>
                  <span v-else>送信する</span>
                </button>

                <button class="btn" type="button" :disabled="sending" @click="goBack">
                  戻る
                </button>

                <span v-if="serverStatus" class="muted" style="font-size: 12px; line-height: 1.7;">
                  {{ serverStatus }}
                </span>
              </div>

              <div v-if="errors.submit" class="err">{{ errors.submit }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- =========================
           DONE PANEL (same layout)
      ========================== -->
      <div v-else class="panel" aria-label="done panel">
        <div class="panel-head">
          <div class="panel-title">
            <h1>送信完了</h1>
            <p>ありがとうございます。内容を確認して折り返します。</p>
          </div>
          <div class="kbd">Done</div>
        </div>

        <div class="panel-body">
          <div class="card">
            <div class="card-inner" style="display: grid; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div
                  style="
                    width: 34px;
                    height: 34px;
                    border-radius: 12px;
                    background: color-mix(in srgb, var(--accent) 16%, rgba(255, 255, 255, 0.25));
                    border: 1px solid color-mix(in srgb, var(--accent) 35%, rgba(0, 0, 0, 0.10));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: color-mix(in srgb, var(--accent) 70%, rgba(0, 0, 0, 0.25));
                  "
                >
                  ✓
                </div>
                <div>
                  <div style="font-weight: 700; color: rgba(0, 0, 0, 0.82);">送信が完了しました</div>
                  <div class="muted" style="font-size: 13px; margin-top: 4px;">通常 24時間以内にご返信します。</div>
                </div>
              </div>

              <div class="hr"></div>

              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <RouterLink class="btn primary" to="/">Home に戻る</RouterLink>
                <button class="btn" type="button" @click="resetToForm">もう一度送る</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";

type Step = "form" | "done";

const router = useRouter();
const step = ref<Step>("form");

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const touched = reactive({
  name: false,
  email: false,
  message: false,
});

const errors = reactive<Record<string, string>>({
  name: "",
  email: "",
  message: "",
  turnstile: "",
  submit: "",
});

const sending = ref(false);
const serverStatus = ref("");

/* ===============================
   Page visibility (base)
================================ */
function ensurePageVisible() {
  document.body.classList.add("page-open");
  document.body.classList.add("is-ready");
  document.body.classList.remove("is-loading");
  document.body.classList.remove("nav-open");
}

/* ===============================
   Contact: enable scroll (same as Works)
================================ */
function enableContactScroll() {
  document.body.classList.add("is-contact-scroll");

  document.documentElement.style.overflowY = "auto";
  document.documentElement.style.overflowX = "hidden";

  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";

  const page = document.querySelector(".page") as HTMLElement | null;
  if (page) {
    page.style.overflow = "auto";
    (page.style as any).webkitOverflowScrolling = "touch";
  }
}

function disableContactScroll() {
  document.body.classList.remove("is-contact-scroll");

  document.documentElement.style.overflowY = "";
  document.documentElement.style.overflowX = "";

  document.body.style.overflowY = "";
  document.body.style.overflowX = "";

  const page = document.querySelector(".page") as HTMLElement | null;
  if (page) {
    page.style.overflow = "";
    (page.style as any).webkitOverflowScrolling = "";
  }
}

/* ===== contact: scroll restore + header/parallax (same pattern as Works) ===== */
function bindPageScrollUX() {
  const page = document.querySelector(".page") as HTMLElement | null;
  if (!page) return () => {};

  const KEY = "scroll:/contact";
  const saved = sessionStorage.getItem(KEY);
  if (saved) page.scrollTop = Number(saved);

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      raf = 0;
      const y = page.scrollTop || 0;

      sessionStorage.setItem(KEY, String(y));

      if (y > 8) document.body.classList.add("is-scrolled");
      else document.body.classList.remove("is-scrolled");

      const p = Math.min(y * 0.08, 24);
      document.documentElement.style.setProperty("--hero-parallax", `${p}px`);
    });
  };

  onScroll();
  page.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    page.removeEventListener("scroll", onScroll as any);
    document.body.classList.remove("is-scrolled");
    document.documentElement.style.setProperty("--hero-parallax", "0px");
  };
}

/* ===============================
   Basic validation
================================ */
function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validate() {
  errors.name = "";
  errors.email = "";
  errors.message = "";
  errors.submit = "";

  if (!form.name) errors.name = "お名前を入力してください";
  if (!form.email) errors.email = "メールを入力してください";
  else if (!isEmail(form.email)) errors.email = "メール形式が正しくありません";
  if (!form.message) errors.message = "内容を入力してください";
}

function touch(key: "name" | "email" | "message") {
  touched[key] = true;
  validate();
}

/* ✅ validate() を computed の中で呼ばない */
const canSubmit = computed(() => {
  return (
    !!form.name &&
    !!form.email &&
    isEmail(form.email) &&
    !!form.message &&
    !!turnstileToken.value
  );
});

/* ===============================
   Turnstile
================================ */
declare global {
  interface Window {
    turnstile?: any;
  }
}

const turnstileMount = ref<HTMLElement | null>(null);
const turnstileWidgetId = ref<string | null>(null);
const turnstileToken = ref<string>("");

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

function loadTurnstileScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();

    const existing = document.querySelector('script[data-turnstile="1"]') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Turnstile script load failed")), { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.dataset.turnstile = "1";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Turnstile script load failed"));
    document.head.appendChild(s);
  });
}

async function initTurnstile() {
  errors.turnstile = "";
  turnstileToken.value = "";

  if (!TURNSTILE_SITE_KEY) {
    errors.turnstile = "Turnstile の site key が未設定です（VITE_TURNSTILE_SITE_KEY）";
    return;
  }

  try {
    await loadTurnstileScript();
  } catch {
    errors.turnstile = "Turnstile の読み込みに失敗しました。時間をおいて再度お試しください。";
    return;
  }

  if (!turnstileMount.value || !window.turnstile) return;

  if (turnstileWidgetId.value) {
    try {
      window.turnstile.remove(turnstileWidgetId.value);
    } catch {}
    turnstileWidgetId.value = null;
  }

  try {
    const id = window.turnstile.render(turnstileMount.value, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: "light",
      callback: (token: string) => {
        turnstileToken.value = token || "";
        errors.turnstile = "";
      },
      "error-callback": () => {
        turnstileToken.value = "";
        errors.turnstile = "チェックに失敗しました。再度お試しください。";
      },
      "expired-callback": () => {
        turnstileToken.value = "";
        errors.turnstile = "チェックが期限切れです。再度チェックしてください。";
      },
    });

    turnstileWidgetId.value = id;
  } catch {
    errors.turnstile = "Turnstile の初期化に失敗しました。";
  }
}

function resetTurnstile() {
  turnstileToken.value = "";
  if (!window.turnstile) return;

  try {
    if (turnstileWidgetId.value) window.turnstile.reset(turnstileWidgetId.value);
  } catch {}
}

/* ===============================
   Submit
================================ */
const CONTACT_ENDPOINT =
  (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || "/api/contact";

async function submit() {
  touched.name = true;
  touched.email = true;
  touched.message = true;

  validate();

  if (!canSubmit.value) {
    if (!turnstileToken.value) errors.turnstile = "送信前チェックを完了してください";
    return;
  }

  sending.value = true;
  serverStatus.value = "";
  errors.submit = "";

  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        turnstileToken: turnstileToken.value,
      }),
    });

    if (!res.ok) {
      let detail = "";
      try {
        const data = await res.json();
        detail = data?.message || data?.error || "";
      } catch {}
      throw new Error(detail || `HTTP ${res.status}`);
    }

    step.value = "done";
    resetTurnstile();
  } catch (e: any) {
    errors.submit = "送信に失敗しました。時間をおいて再度お試しください。";
    serverStatus.value = e?.message ? `Error: ${e.message}` : "";
    resetTurnstile();
  } finally {
    sending.value = false;
  }
}

/* ===============================
   Navigation helpers
================================ */
function goBack() {
  if (window.history.length > 1) router.back();
  else router.push("/");
}

function resetToForm() {
  step.value = "form";
  form.name = "";
  form.email = "";
  form.message = "";
  touched.name = false;
  touched.email = false;
  touched.message = false;
  errors.name = "";
  errors.email = "";
  errors.message = "";
  errors.turnstile = "";
  errors.submit = "";
  serverStatus.value = "";
  initTurnstile();
}

/* ===============================
   Mount / Unmount
================================ */
let unbindUX: null | (() => void) = null;

onMounted(() => {
  ensurePageVisible();
  enableContactScroll();

  unbindUX = bindPageScrollUX();

  initTurnstile();
});

onBeforeUnmount(() => {
  unbindUX?.();
  disableContactScroll();

  document.body.classList.remove("nav-open");
});
</script>