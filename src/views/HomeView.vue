<template>
  <!-- Intro Overlay (reload motion) -->
  <div v-if="showIntroCover" ref="introEl" class="intro" aria-hidden="true">
    <div class="intro__inner">
      <div class="intro__line">今日は何をお手伝いしましょうか？</div>
    </div>
  </div>

  <!-- ===== Fullscreen Cover ===== -->
  <!-- ✅ keyで毎回作り直して opacity 残骸を完全排除 -->
  <div
    v-if="showIntroCover"
    :key="coverKey"
    ref="coverEl"
    class="cover"
    aria-label="fullscreen cover"
  >
    <header class="cover-header">
      <div class="cover-header__inner">
        <!-- ロゴはダミー -->
        <RouterLink class="cover-brand" to="/" aria-label="Morii's Portfolio">
          <span class="cover-brand__mark" aria-hidden="true">◎</span>
          <span class="cover-brand__text">Morii's Portfolio</span>
        </RouterLink>

        <nav class="cover-nav" aria-label="Global navigation">
          <RouterLink class="cover-nav__link" to="/works">実績</RouterLink>
          <RouterLink class="cover-nav__link" to="/contact">お問い合わせ</RouterLink>
          <span class="cover-nav__sep">|</span>
          <a
            class="cover-nav__link"
            href="https://github.com/Ro969Be"
            target="_blank"
            rel="noopener"
          >GitHub</a>
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

        <a
          class="fb-card reveal"
          data-delay="2"
          href="https://github.com/Mori-Chan"
          target="_blank"
          rel="noopener"
        >
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

        <a
          class="fb-card reveal"
          data-delay="3"
          href="https://github.com/Ro969Be"
          target="_blank"
          rel="noopener"
        >
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

        <a
          class="fb-card reveal"
          data-delay="4"
          href="https://qiita.com/Mori-chan"
          target="_blank"
          rel="noopener"
        >
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

      <!-- Close (bottom-left) -->
      <!-- ✅ document click で拾わず、確実にこのボタンで閉じる -->
      <button class="cover-close" type="button" aria-label="Close" @click="openPageFromCover">
        <span class="cover-close__x" aria-hidden="true">×</span>
      </button>
    </main>
  </div>

  <!-- ===== After close page ===== -->
  <div class="page" aria-label="after close page">
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <RouterLink class="site-brand" to="/" aria-label="Mori Portfolio">
          <span class="site-brand__mark" aria-hidden="true">◎</span>
          <span class="site-brand__text">Mori Portfolio</span>
        </RouterLink>

        <nav class="site-nav" aria-label="Global navigation">
          <RouterLink class="site-nav__link" to="/works">実績</RouterLink>
          <RouterLink class="site-nav__link" to="/contact">お問い合わせ</RouterLink>
          <span class="site-nav__sep">|</span>
          <a class="site-nav__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener">GitHub</a>
        </nav>

        <button
          ref="burgerEl"
          class="site-burger"
          type="button"
          aria-label="Menu"
          :aria-expanded="isNavOpen ? 'true' : 'false'"
          @click.prevent.stop="toggleNav"
        >
          <span class="site-burger__lines" aria-hidden="true"></span>
        </button>
      </div>

      <div ref="drawerEl" class="site-drawer" :aria-hidden="isNavOpen ? 'false' : 'true'">
        <RouterLink class="site-drawer__link" to="/works">実績</RouterLink>
        <RouterLink class="site-drawer__link" to="/contact">お問い合わせ</RouterLink>
        <a class="site-drawer__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener">GitHub</a>
      </div>
    </header>

    <div class="nav-backdrop" aria-hidden="true" @click.prevent="closeNav"></div>

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
              開発環境：Node.js, npm, pnpm, MongoDB, Codex, GitHub, AngularJS, Vue.js, TypeScript, Adobe Illustrator, Adobe Photoshop<br />e.t.c.<br /><br />
              まずはご相談ください。
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

const showIntroCover = ref(false);
const coverKey = ref(0);

const coverEl = ref<HTMLElement | null>(null);
const introEl = ref<HTMLElement | null>(null);

const isNavOpen = ref(false);

let HOME_SEEN_IN_THIS_TAB = false;

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
  // ✅ is-ready を外して reveal を確実に「最初から」動かす
  document.body.classList.remove("is-ready");
  document.body.classList.add("is-loading");

  const intro = introEl.value;

  // ✅ failsafe（固着防止）
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

function closeNav() {
  isNavOpen.value = false;
  document.body.classList.remove("nav-open");
}
function openNav() {
  isNavOpen.value = true;
  document.body.classList.add("nav-open");
}
function toggleNav() {
  isNavOpen.value ? closeNav() : openNav();
}

function openPageFromCover() {
  const cover = coverEl.value;
  if (!cover) return;

  // ✅ 「閉じる」= page-open に戻す（CSS設計通り）
  document.body.classList.add("page-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");

  // cover フェードアウト
  cover.style.transition = "opacity .6s cubic-bezier(.22,.61,.36,1)";
  cover.style.opacity = "0";

  window.setTimeout(() => {
    showIntroCover.value = false; // DOMを消す
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
  }, 600);
}

async function showCoverAndIntro() {
  // ✅ 毎回 cover を作り直す（opacity残骸完全排除）
  coverKey.value += 1;

  showIntroCover.value = true;

  // cover中は page を閉じる（= .page は非表示）
  document.body.classList.remove("page-open");
  document.body.classList.remove("nav-open");
  isNavOpen.value = false;

  // ✅ v-if DOM生成待ち
  await nextTick();

  // ✅ 念のため毎回初期化（ここが効く）
  const cover = coverEl.value;
  if (cover) {
    cover.style.transition = "";
    cover.style.opacity = "1";
  }

  const intro = introEl.value;
  if (intro) {
    intro.classList.remove("is-out");
  }

  runIntroThenReveal();
}

function showPageImmediately() {
  showIntroCover.value = false;

  document.body.classList.add("page-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  closeNav();
}

onBeforeRouteLeave(() => {
  // ✅ Homeから出る時は必ず page-open を付けて「白画面」を潰す
  document.body.classList.add("page-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  closeNav();

  // cover出しっぱなし遷移でも残骸を消す
  showIntroCover.value = false;
});

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && isNavOpen.value) closeNav();
}

onMounted(async () => {
  // 最低限の掃除
  document.body.classList.remove("is-loading");
  closeNav();

  // ✅ 要件：リロード時は必ず intro+cover
  const reload = isReloadNav();

  // ✅ SPA遷移ではこのタブ初回だけ
  const shouldShow = reload || !HOME_SEEN_IN_THIS_TAB;
  HOME_SEEN_IN_THIS_TAB = true;

  window.addEventListener("keydown", onKeydown);

  if (shouldShow) {
    await showCoverAndIntro();
    return;
  }

  showPageImmediately();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>