<template>
  <!-- Intro Overlay (reload motion) -->
  <div v-if="showIntroCover" ref="introEl" class="intro" aria-hidden="true">
    <div class="intro__inner">
      <div class="intro__line">今日は何をお手伝いしましょうか？</div>
    </div>
  </div>

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
          <div class="fb-card__illust" aria-hidden="true">
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
          <div class="fb-card__illust" aria-hidden="true">
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
          <div class="fb-card__illust" aria-hidden="true">
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
          <div class="fb-card__illust" aria-hidden="true">
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
          <div class="fb-card__illust" aria-hidden="true">
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

            <div class="hero-illus" aria-hidden="true">
              <div class="hero-illus__box" id="heroIllus">
                <div class="hero-illus__label">IMAGE (dummy)</div>
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

            <a class="hero-menu__item" data-illus="03" href="https://qiita.com/Mori-chan" target="_blank" rel="noopener">
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
import { nextTick, onMounted, onBeforeUnmount, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import AppHeader from "../components/AppHeader.vue";

const showIntroCover = ref(false);
const coverKey = ref(0);

const coverEl = ref<HTMLElement | null>(null);
const introEl = ref<HTMLElement | null>(null);

const SEEN_KEY = "MP_HOME_SEEN";
const RELOAD_KEY = "MP_HOME_RELOAD_ONCE";
const LOAD_ID_KEY = "MP_LOAD_ID";

let pageBound = false;
let detachScrollEffects: null | (() => void) = null;

function isReloadNav(): boolean {
  try {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type) return nav.type === "reload";
    const p: any = performance as any;
    if (p?.navigation) return p.navigation.type === 1;
  } catch {}
  return false;
}

function runIntroThenReveal() {
  document.body.classList.remove("is-ready");
  document.body.classList.add("is-loading");

  const intro = introEl.value;

  const FORCE_MS = 3000;
  const forceTimer = window.setTimeout(() => {
    if (intro) intro.classList.add("is-out");
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");
  }, FORCE_MS);

  if (!intro) {
    window.clearTimeout(forceTimer);
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");
    return;
  }

  const LINE_MS = 1250;
  const OUT_MS = 550;

  window.setTimeout(() => {
    intro.classList.add("is-out");
    window.setTimeout(() => {
      window.clearTimeout(forceTimer);
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-ready");
    }, OUT_MS);
  }, LINE_MS);
}

/* ===============================
   illus swap
================================ */
function setIllus(variant: string) {
  const map: Record<string, string> = {
    "00":
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.35'/%3E%3Cpath d='M120 520 L1080 520' stroke='%23a24d44' stroke-opacity='.18' stroke-width='12'/%3E%3C/svg%3E",
    "01":
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Cpath d='M0 520 C 220 430, 360 610, 620 520 C 880 430, 980 590, 1200 520' fill='none' stroke='%23a24d44' stroke-opacity='.35' stroke-width='18'/%3E%3C/svg%3E",
    "02":
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Ccircle cx='380' cy='320' r='220' fill='%23a24d44' fill-opacity='.14'/%3E%3Ccircle cx='780' cy='420' r='260' fill='%23a24d44' fill-opacity='.10'/%3E%3C/svg%3E",
    "03":
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Cpath d='M120 560 L1080 560' stroke='%23a24d44' stroke-opacity='.22' stroke-width='14'/%3E%3Cpath d='M220 470 L980 470' stroke='%23a24d44' stroke-opacity='.18' stroke-width='10'/%3E%3Cpath d='M340 390 L860 390' stroke='%23a24d44' stroke-opacity='.14' stroke-width='8'/%3E%3C/svg%3E",
    "04":
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Cpath d='M180 520 C 340 360, 520 640, 720 420 C 900 240, 1040 520, 1200 360' fill='none' stroke='%23a24d44' stroke-opacity='.28' stroke-width='16'/%3E%3C/svg%3E",
    "05":
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Crect x='240' y='200' width='720' height='320' rx='40' fill='%23a24d44' fill-opacity='.10'/%3E%3Cpath d='M300 260 L900 260' stroke='%23a24d44' stroke-opacity='.18' stroke-width='12'/%3E%3C/svg%3E",
  };

  const key = String(variant);
  const uri = map[key] ? map[key] : map["00"];
  document.documentElement.style.setProperty("--illus-url", `url("${uri}")`);
}

function setupPageInteractionsOnce() {
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
   Scroll effects (header alpha + parallax)
================================ */
function getScroller(): Window | HTMLElement {
  const page = document.querySelector(".page") as HTMLElement | null;
  if (page) {
    const st = getComputedStyle(page);
    if (st.overflowY === "auto" || st.overflowY === "scroll") return page;
  }
  return window;
}

function attachScrollEffects() {
  const scroller = getScroller();
  const readY = () => (scroller === window ? window.scrollY : (scroller as HTMLElement).scrollTop);

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      raf = 0;
      const y = readY();

      if (y > 8) document.body.classList.add("is-scrolled");
      else document.body.classList.remove("is-scrolled");

      const p = Math.min(y * 0.08, 24);
      document.documentElement.style.setProperty("--hero-parallax", `${p}px`);
    });
  };

  onScroll();

  if (scroller === window) {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  } else {
    (scroller as HTMLElement).addEventListener("scroll", onScroll, { passive: true });
    return () => (scroller as HTMLElement).removeEventListener("scroll", onScroll as any);
  }
}

/* ===============================
   Cover open/close
================================ */
function startPageEffects() {
  setupPageInteractionsOnce();

  detachScrollEffects?.();
  detachScrollEffects = attachScrollEffects();
}

function openPageFromCover() {
  const cover = coverEl.value;
  if (!cover) return;

  document.body.classList.add("page-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");

  cover.style.transition = "opacity .6s cubic-bezier(.22,.61,.36,1)";
  cover.style.opacity = "0";

  window.setTimeout(() => {
    showIntroCover.value = false;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    startPageEffects();
  }, 600);
}

async function showCoverAndIntro() {
  coverKey.value += 1;
  showIntroCover.value = true;

  document.body.classList.remove("page-open");

  await nextTick();

  const cover = coverEl.value;
  if (cover) {
    cover.style.transition = "";
    cover.style.opacity = "1";
  }

  const intro = introEl.value;
  if (intro) intro.classList.remove("is-out");

  runIntroThenReveal();
}

function showPageImmediately() {
  showIntroCover.value = false;
  document.body.classList.add("page-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");

  startPageEffects();
}

/* ===============================
   Route leave
================================ */
onBeforeRouteLeave(() => {
  document.body.classList.add("page-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  showIntroCover.value = false;
});

/* ===============================
   Mount
================================ */
onMounted(async () => {
  // 初期の保険（白画面系を潰す）
  document.body.classList.remove("nav-open");
  document.body.classList.remove("is-loading");
  document.body.classList.remove("is-scrolled");

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
    await showCoverAndIntro();
    return;
  }

  showPageImmediately();
});

onBeforeUnmount(() => {
  pageBound = false;
  detachScrollEffects?.();
  detachScrollEffects = null;

  document.body.classList.remove("is-scrolled");
  document.documentElement.style.setProperty("--hero-parallax", "0px");
});
</script>