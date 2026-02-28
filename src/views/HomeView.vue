<template>
  <!-- ===== Fullscreen Cover ===== -->
  <div v-if="showIntroCover" :key="coverKey" ref="coverEl" class="cover" aria-label="fullscreen cover">
    <header class="cover-header">
      <div class="cover-header__inner">
        <RouterLink class="cover-brand" to="/" aria-label="Morii's Portfolio">
          <span class="cover-brand__mark" aria-hidden="true">◎</span>
          <span class="cover-brand__text">Morii's Portfolio</span>
        </RouterLink>

        <nav class="cover-nav" aria-label="Global navigation">
          <RouterLink class="cover-nav__link" to="/works">実績</RouterLink>
          <RouterLink class="cover-nav__link" to="/contact">お問い合わせ</RouterLink>
          <span class="cover-nav__sep">|</span>
          <a class="cover-nav__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener">GitHub</a>
        </nav>
      </div>
    </header>

    <main class="cover-main">
      <h1 class="cover-title reveal" data-delay="1">何をお求めですか？</h1>

      <section class="cover-cards" aria-label="cover cards">
        <RouterLink class="fb-card reveal" data-delay="1" to="/works">
          <div class="fb-card__num">01</div>
          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!coverThumbs.works }"
            :style="coverThumbs.works ? { backgroundImage: `url('${coverThumbs.works}')` } : undefined"
          >
            <div class="fb-card__illust-inner">WORKS</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">実績一覧</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">過去に携わった案件を公開可能な範囲で掲載しています。</p>
        </RouterLink>

        <a class="fb-card reveal" data-delay="2" href="https://github.com/Mori-Chan" target="_blank" rel="noopener">
          <div class="fb-card__num">02</div>
          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!coverThumbs.githubLegacy }"
            :style="coverThumbs.githubLegacy ? { backgroundImage: `url('${coverThumbs.githubLegacy}')` } : undefined"
          >
            <div class="fb-card__illust-inner">LINK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">GitHub / 個人開発(過去)</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">過去使用していたアカウントのリポジトリはこちら。(現在はログイン不可)</p>
        </a>

        <a class="fb-card reveal" data-delay="3" href="https://github.com/Ro969Be" target="_blank" rel="noopener">
          <div class="fb-card__num">03</div>
          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!coverThumbs.githubCurrent }"
            :style="coverThumbs.githubCurrent ? { backgroundImage: `url('${coverThumbs.githubCurrent}')` } : undefined"
          >
            <div class="fb-card__illust-inner">LINK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">GitHub / 個人開発(現行)</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">現行アカウントのリポジトリはこちら。</p>
        </a>

        <a class="fb-card reveal" data-delay="4" href="https://qiita.com/Mori-chan" target="_blank" rel="noopener">
          <div class="fb-card__num">04</div>
          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!coverThumbs.qiita }"
            :style="coverThumbs.qiita ? { backgroundImage: `url('${coverThumbs.qiita}')` } : undefined"
          >
            <div class="fb-card__illust-inner">LINK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">Qiita</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">Qiitaの記事はこちら。</p>
        </a>

        <RouterLink class="fb-card reveal" data-delay="5" to="/contact">
          <div class="fb-card__num">05</div>
          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!coverThumbs.contact }"
            :style="coverThumbs.contact ? { backgroundImage: `url('${coverThumbs.contact}')` } : undefined"
          >
            <div class="fb-card__illust-inner">CONTACT</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">問い合わせ</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">問い合わせページはこちら。</p>
        </RouterLink>
      </section>

      <button class="cover-close" type="button" aria-label="Close" @click="openPageFromCover">
        <span class="cover-close__x" aria-hidden="true">×</span>
      </button>
    </main>
  </div>

  <!-- ===== After close page ===== -->
  <div class="page" aria-label="after close page">
    <AppHeader />

    <main class="site-main" role="main">
      <section class="hero-card" aria-label="hero card">
        <div class="hero-card__inner">
          <div class="hero-left">
            <h1 class="hero-title">
              Web制作・改修から<br />
              アプリケーション開発まで
            </h1>

            <!-- ★ ここが「1か所」：背景画像をJSで差し替える -->
            <div class="hero-illus" aria-hidden="true">
              <div class="hero-illus__box" id="heroIllus">
                <div class="hero-illus__label">IMAGE</div>
              </div>
            </div>
          </div>

          <div class="hero-center">
            <p class="hero-lead">
              LP / コーポレートサイト / 会員サイトなどをデザインからコーディングまでできます。<br />
              修正・改善もお任せください。
            </p>

            <p class="hero-body">
              実績例：物件サイト、クラブサイト、LPのデザイン修正、住宅系特設ページなど。<br />
              企業内連絡ツール(チャットアプリ)、ホームページ管理アプリ、Discordの音声BOTなど。<br /><br />
              開発環境：Node.js, npm, pnpm, MongoDB, Codex, GitHub, AngularJS, Vue.js, TypeScript, Adobe Illustrator,
              Adobe Photoshop<br />e.t.c.<br /><br />
              まずはご相談ください。<br /><br />
              趣味：ワイン(チリのカベルネ・ソーヴィニョン、南アのシュナンブラン)、Apex Legends(最高マスター)、ボルダリング(簡単な2級程度)
            </p>
          </div>

          <aside class="hero-menu" aria-label="hero menu">
            <RouterLink class="hero-menu__item" to="/works" data-illus="01">
              <div class="hero-menu__num">01</div>
              <div class="hero-menu__label">WORKS / 実績一覧</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </RouterLink>

            <a class="hero-menu__item" data-illus="02" href="https://github.com/Mori-Chan" target="_blank" rel="noopener">
              <div class="hero-menu__num">02</div>
              <div class="hero-menu__label">GitHub / 個人開発(過去)</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </a>

            <a class="hero-menu__item" data-illus="03" href="https://github.com/Ro969Be" target="_blank" rel="noopener">
              <div class="hero-menu__num">03</div>
              <div class="hero-menu__label">GitHub / 個人開発(現行)</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </a>

            <a class="hero-menu__item" data-illus="04" href="https://qiita.com/Mori-chan" target="_blank" rel="noopener">
              <div class="hero-menu__num">04</div>
              <div class="hero-menu__label">Qiita / 記事</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </a>

            <RouterLink class="hero-menu__item" to="/contact" data-illus="05">
              <div class="hero-menu__num">05</div>
              <div class="hero-menu__label">CONTACT / 問い合わせ</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </RouterLink>
          </aside>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onBeforeUnmount, ref, reactive } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import { ogpImage } from "../utils/og";

const showIntroCover = ref(false);
const coverKey = ref(0);
const coverEl = ref<HTMLElement | null>(null);

const SEEN_KEY = "MP_HOME_SEEN";
const RELOAD_KEY = "MP_HOME_RELOAD_ONCE";
const LOAD_ID_KEY = "MP_LOAD_ID";

let pageBound = false;

/* ===============================
   Cover thumbs
================================ */
const coverThumbs = reactive<Record<string, string | null>>({
  works: "/images/works.png",
  contact: "/images/contact.png",
  githubLegacy: null,
  githubCurrent: null,
  qiita: null,
});

function initCoverThumbs() {
  // 外部はOGP（/api/og が画像 bytes を返す設計）
  coverThumbs.githubLegacy = ogpImage("https://github.com/Mori-Chan");
  coverThumbs.githubCurrent = ogpImage("https://github.com/Ro969Be");
  coverThumbs.qiita = ogpImage("https://qiita.com/Mori-chan");
}

/* ===============================
   Hero image swap (ONE PLACE)
================================ */
function setIllus(variant: string) {
  const map: Record<string, string> = {
    "00": "/images/home.png",
    "01": "/images/works.png",
    "02": "https://github.com/Mori-Chan.png?size=1200",
    "03": "https://github.com/Ro969Be.png?size=1200",
    "04": ogpImage("https://qiita.com/Mori-chan"),
    "05": "/images/contact.png",
  };

  const url = map[String(variant)] || map["00"];
  const el = document.getElementById("heroIllus") as HTMLElement | null;
  if (!el) return;

  el.style.backgroundImage = `url("${url}")`;
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundPosition = "center";
  el.style.backgroundSize = "cover";
  el.classList.add("is-img");
}

/* ===============================
   Bind hover/focus/touch
================================ */
function setupHeroMenuHoverOnce() {
  if (pageBound) return;
  pageBound = true;

  const items = document.querySelectorAll(".hero-menu__item[data-illus]");
  if (!items.length) return;

  const base = "00";
  setIllus(base);

  items.forEach((el) => {
    const v = el.getAttribute("data-illus") || base;

    el.addEventListener("mouseenter", () => setIllus(v));
    el.addEventListener("focus", () => setIllus(v));

    el.addEventListener("mouseleave", () => setIllus(base));
    el.addEventListener("blur", () => setIllus(base));

    el.addEventListener("touchstart", () => setIllus(v), { passive: true });
    el.addEventListener("touchend", () => setIllus(base), { passive: true });
    el.addEventListener("touchcancel", () => setIllus(base), { passive: true });
  });
}

/* ===============================
   Cover open/close
================================ */
function openPageFromCover() {
  const cover = coverEl.value;
  if (!cover) {
    showIntroCover.value = false;
    return;
  }

  cover.style.transition = "opacity .6s cubic-bezier(.22,.61,.36,1)";
  cover.style.opacity = "0";

  window.setTimeout(() => {
    showIntroCover.value = false;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
  }, 600);
}

/* ===============================
   Reload detect
================================ */
function isReloadNav(): boolean {
  try {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type) return nav.type === "reload";
    const p: any = performance as any;
    if (p?.navigation) return p.navigation.type === 1;
  } catch {}
  return false;
}

async function showCover() {
  coverKey.value += 1;
  showIntroCover.value = true;
  await nextTick();
  const cover = coverEl.value;
  if (cover) {
    cover.style.transition = "";
    cover.style.opacity = "1";
  }
}

/* ===============================
   Route leave
================================ */
onBeforeRouteLeave(() => {
  showIntroCover.value = false;
});

/* ===============================
   Mount
================================ */
onMounted(async () => {
  initCoverThumbs();
  setupHeroMenuHoverOnce();

  // cover show logic (keep your existing behavior)
  const nowLoadId = String((performance as any).timeOrigin ?? Date.now());
  const prevLoadId = sessionStorage.getItem(LOAD_ID_KEY);

  if (prevLoadId !== nowLoadId) {
    sessionStorage.setItem(LOAD_ID_KEY, nowLoadId);
    sessionStorage.setItem(RELOAD_KEY, isReloadNav() ? "1" : "0");
  }

  const seen = sessionStorage.getItem(SEEN_KEY) === "1";
  const reloadPending = sessionStorage.getItem(RELOAD_KEY) === "1";
  const shouldShow = reloadPending || !seen;

  sessionStorage.setItem(SEEN_KEY, "1");
  sessionStorage.setItem(RELOAD_KEY, "0");

  if (shouldShow) {
    await showCover();
  } else {
    showIntroCover.value = false;
  }
});

onBeforeUnmount(() => {
  pageBound = false;
});
</script>

<style scoped>
.fb-card__illust.is-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.fb-card__illust.is-img .fb-card__illust-inner {
  opacity: 0;
}

/* hero left image box */
.hero-illus__box {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.hero-illus__box.is-img .hero-illus__label {
  opacity: 0;
}
</style>