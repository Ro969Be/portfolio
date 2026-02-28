<template>
  <!-- Intro Overlay (reload motion) -->
  <div class="intro" aria-hidden="true">
    <div class="intro__inner">
      <div class="intro__line">今日は何をお手伝いしましょうか？</div>
    </div>
  </div>

  <!-- ===== Fullscreen Cover ===== -->
  <div class="cover" aria-label="fullscreen cover">
    <header class="cover-header">
      <div class="cover-header__inner">
        <!-- ロゴはダミー -->
        <RouterLink class="cover-brand" to="/" aria-label="Mori Portfolio">
          <span class="cover-brand__mark" aria-hidden="true">◎</span>
          <span class="cover-brand__text">Mori Portfolio</span>
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
      <h1 class="cover-title reveal" data-delay="1">今日は何をお手伝いしましょうか？</h1>

      <section class="cover-cards" aria-label="cover cards">
        <RouterLink class="fb-card reveal" data-delay="1" to="/works#parktown-kiyose63">
          <div class="fb-card__num">01</div>
          <div class="fb-card__illust" aria-hidden="true">
            <div class="fb-card__illust-inner">WORK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">物件サイト / LP</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">不動産・物件サイトの情報設計と表示品質を整えます。</p>
        </RouterLink>

        <RouterLink class="fb-card reveal" data-delay="2" to="/works#tokyo-orc-member">
          <div class="fb-card__num">02</div>
          <div class="fb-card__illust" aria-hidden="true">
            <div class="fb-card__illust-inner">WORK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">会員サイト改修</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">既存トーンを崩さず、読みやすさと操作性を改善します。</p>
        </RouterLink>

        <RouterLink class="fb-card reveal" data-delay="3" to="/works#hinokiya-z">
          <div class="fb-card__num">03</div>
          <div class="fb-card__illust" aria-hidden="true">
            <div class="fb-card__illust-inner">WORK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">特設ページ / 演出</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">表現・演出の質を高め、印象に残るページに整えます。</p>
        </RouterLink>

        <a class="fb-card reveal" data-delay="4" href="https://github.com/Ro969Be" target="_blank" rel="noopener">
          <div class="fb-card__num">04</div>
          <div class="fb-card__illust" aria-hidden="true">
            <div class="fb-card__illust-inner">LINK</div>
          </div>
          <div class="fb-card__head">
            <div class="fb-card__label">GitHub / 個人開発</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>
          <p class="fb-card__desc">現行アカウントのリポジトリはこちら。</p>
        </a>
      </section>

      <!-- Close (bottom-left) -->
      <button class="cover-close" type="button" aria-label="Close">
        <span class="cover-close__x" aria-hidden="true">×</span>
      </button>
    </main>
  </div>

  <!-- ===== After close page ===== -->
  <div class="page" aria-label="after close page">
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <!-- ロゴはダミー -->
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

        <!-- mobile/tablet burger -->
        <button class="site-burger" type="button" aria-label="Menu" aria-expanded="false">
          <span class="site-burger__lines" aria-hidden="true"></span>
        </button>
      </div>

      <!-- mobile/tablet drawer -->
      <div class="site-drawer" aria-hidden="true">
        <RouterLink class="site-drawer__link" to="/works">実績</RouterLink>
        <RouterLink class="site-drawer__link" to="/contact">お問い合わせ</RouterLink>
        <a class="site-drawer__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener">GitHub</a>
      </div>
    </header>

    <!-- Nav backdrop (tap outside to close) -->
    <div class="nav-backdrop" aria-hidden="true"></div>

    <main class="site-main" role="main">
      <section class="hero-card" aria-label="hero card">
        <div class="hero-card__inner">
          <!-- left -->
          <div class="hero-left">
            <h1 class="hero-title">
              Web制作・改修を<br />
              “見た目のまま”仕上げます。
            </h1>

            <!-- 画像はダミー -->
            <div class="hero-illus" aria-hidden="true">
              <div class="hero-illus__box" id="heroIllus">
                <div class="hero-illus__label">IMAGE (dummy)</div>
              </div>
            </div>
          </div>

          <!-- center -->
          <div class="hero-center">
            <p class="hero-lead">
              LP / コーポレート / 会員サイトなど、既存デザインを崩さずに修正・改善できます。<br />
              “色味変更はOK、レイアウトと動きはそのまま” のような案件に強いです。
            </p>

            <p class="hero-body">
              実績例：物件サイト、クラブサイト、会員サイトのデザイン修正、住宅系特設ページなど。<br /><br />
              要望と制約を整理し、必要な箇所だけを最小限で直して、完成度を上げます。<br /><br />
              まずはご相談ください。
            </p>
          </div>

          <!-- right -->
          <aside class="hero-menu" aria-label="hero menu">
            <RouterLink class="hero-menu__item" to="/works#parktown-kiyose63" data-illus="01">
              <div class="hero-menu__num">01</div>
              <div class="hero-menu__label">物件サイト / LP 実績</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </RouterLink>

            <RouterLink class="hero-menu__item" to="/works#tokyo-orc-member" data-illus="02">
              <div class="hero-menu__num">02</div>
              <div class="hero-menu__label">会員サイトのデザイン修正</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </RouterLink>

            <RouterLink class="hero-menu__item" to="/contact" data-illus="03">
              <div class="hero-menu__num">03</div>
              <div class="hero-menu__label">お問い合わせ</div>
              <div class="hero-menu__arrow" aria-hidden="true">›</div>
            </RouterLink>
          </aside>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

function runIntroThenReveal() {
  const intro = document.querySelector(".intro") as HTMLElement | null;
  document.body.classList.add("is-loading");

  if (!intro) {
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");
    return;
  }

  const LINE_MS = 1250;
  const OUT_MS = 550;

  window.setTimeout(() => {
    intro.classList.add("is-out");

    window.setTimeout(() => {
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-ready");
    }, OUT_MS);
  }, LINE_MS);
}

function openPageFromCover() {
  const cover = document.querySelector(".cover") as HTMLElement | null;
  if (!cover) return;

  document.body.classList.add("page-open");

  cover.style.transition = "opacity .6s cubic-bezier(.22,.61,.36,1)";
  cover.style.opacity = "0";

  window.setTimeout(() => {
    cover.style.display = "none";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    setupPageInteractions();
  }, 600);
}

function setIllus(variant: string) {
  const map: Record<string, string> = {
    "00": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.35'/%3E%3Cpath d='M120 520 L1080 520' stroke='%23a24d44' stroke-opacity='.18' stroke-width='12'/%3E%3C/svg%3E",
    "01": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Cpath d='M0 520 C 220 430, 360 610, 620 520 C 880 430, 980 590, 1200 520' fill='none' stroke='%23a24d44' stroke-opacity='.35' stroke-width='18'/%3E%3C/svg%3E",
    "02": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Ccircle cx='380' cy='320' r='220' fill='%23a24d44' fill-opacity='.14'/%3E%3Ccircle cx='780' cy='420' r='260' fill='%23a24d44' fill-opacity='.10'/%3E%3C/svg%3E",
    "03": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'%3E%3Crect width='1200' height='700' fill='%23ffffff' fill-opacity='.25'/%3E%3Cpath d='M120 560 L1080 560' stroke='%23a24d44' stroke-opacity='.22' stroke-width='14'/%3E%3Cpath d='M220 470 L980 470' stroke='%23a24d44' stroke-opacity='.18' stroke-width='10'/%3E%3Cpath d='M340 390 L860 390' stroke='%23a24d44' stroke-opacity='.14' stroke-width='8'/%3E%3C/svg%3E",
  };

  const key = String(variant);
  const uri = map[key] ? map[key] : map["00"];
  document.documentElement.style.setProperty("--illus-url", `url("${uri}")`);
}

function setupPageInteractions() {
  const burger = document.querySelector(".site-burger") as HTMLElement | null;
  const drawer = document.querySelector(".site-drawer") as HTMLElement | null;
  const backdrop = document.querySelector(".nav-backdrop") as HTMLElement | null;

  // illus swap
  const items = document.querySelectorAll<HTMLElement>(".hero-menu__item[data-illus]");
  if (items.length) {
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

  function openNav() {
    document.body.classList.add("nav-open");
    burger?.setAttribute("aria-expanded", "true");
    drawer?.setAttribute("aria-hidden", "false");
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    burger?.setAttribute("aria-expanded", "false");
    drawer?.setAttribute("aria-hidden", "true");
  }

  function toggleNav() {
    const isOpen = document.body.classList.contains("nav-open");
    isOpen ? closeNav() : openNav();
  }

  if (burger && !(burger as any).__bound) {
    (burger as any).__bound = true;
    burger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleNav();
    });
  }

  if (drawer && !(drawer as any).__bound) {
    (drawer as any).__bound = true;
    drawer.addEventListener("click", (e) => e.stopPropagation());
  }

  if (backdrop && !(backdrop as any).__bound) {
    (backdrop as any).__bound = true;
    backdrop.addEventListener("click", (e) => {
      e.preventDefault();
      closeNav();
    });
  }

  if (!(document as any).__escBound) {
    (document as any).__escBound = true;
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) closeNav();
    });
  }
}

function hasSeenInThisTab() {
  return (window.name || "").includes("FB_SEEN=1");
}
function markSeenInThisTab() {
  const n = window.name || "";
  if (!n.includes("FB_SEEN=1")) window.name = (n ? n + ";" : "") + "FB_SEEN=1";
}
function isReloadNav() {
  const navEntry = performance.getEntriesByType("navigation")[0] as any;
  if (navEntry && navEntry.type) return navEntry.type === "reload";
  const p: any = performance as any;
  if (p && p.navigation) return p.navigation.type === 1;
  return false;
}

function showPageImmediately() {
  const cover = document.querySelector(".cover") as HTMLElement | null;
  const page = document.querySelector(".page") as HTMLElement | null;
  const intro = document.querySelector(".intro") as HTMLElement | null;

  document.body.classList.add("page-open");
  document.body.classList.remove("nav-open");
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");

  if (intro) intro.style.display = "none";
  if (cover) {
    cover.style.display = "none";
    cover.style.opacity = "0";
    cover.style.pointerEvents = "none";
  }
  if (page) {
    page.style.visibility = "visible";
    page.style.opacity = "1";
    page.style.transform = "none";
  }
  setupPageInteractions();
}

onMounted(() => {
  // cover-close
  document.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    const btn = t.closest(".cover-close");
    if (!btn) return;
    markSeenInThisTab();
    openPageFromCover();
  });

  const reload = isReloadNav();
  const seen = hasSeenInThisTab();
  markSeenInThisTab();

  if (reload) {
    runIntroThenReveal();
    return;
  }
  if (seen) {
    showPageImmediately();
    return;
  }
  runIntroThenReveal();
});
</script>