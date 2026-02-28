<template>
  <div class="page works-page">
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <RouterLink class="site-brand" to="/" aria-label="Morii's Portfolio">
          <span class="site-brand__mark" aria-hidden="true">◎</span>
          <span class="site-brand__text">Morii's Portfolio</span>
        </RouterLink>

        <nav class="site-nav" aria-label="Global navigation">
          <RouterLink class="site-nav__link" to="/works">実績</RouterLink>
          <RouterLink class="site-nav__link" to="/contact">お問い合わせ</RouterLink>
          <span class="site-nav__sep">|</span>
          <a class="site-nav__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener">GitHub</a>
        </nav>

        <button class="site-burger" type="button" aria-label="Menu" aria-expanded="false">
          <span class="site-burger__lines" aria-hidden="true"></span>
        </button>
      </div>

      <div class="site-drawer" aria-hidden="true">
        <RouterLink class="site-drawer__link" to="/works">実績</RouterLink>
        <RouterLink class="site-drawer__link" to="/contact">お問い合わせ</RouterLink>
        <a class="site-drawer__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener">GitHub</a>
      </div>
    </header>

    <div class="nav-backdrop" aria-hidden="true"></div>

    <main class="site-main" role="main">
      <h1>
        実績一覧
        <span>Works</span>
      </h1>
      <section class="works-cards" aria-label="works tiles">
        <a
          v-for="(w, idx) in works"
          :key="w.id"
          class="fb-card reveal"
          :data-delay="String(Math.min(idx + 1, 4))"
          :href="w.url"
          target="_blank"
          rel="noopener"
          :id="w.id"
        >
          <div class="fb-card__num">{{ String(idx + 1).padStart(2, "0") }}</div>

          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!thumbs[w.id] }"
            :style="thumbs[w.id] ? { backgroundImage: `url('${thumbs[w.id]}')` } : undefined"
          >
            <div class="fb-card__illust-inner">{{ w.url.includes("github.com") ? "LINK" : "WORK" }}</div>
          </div>

          <div class="fb-card__head">
            <div class="fb-card__label">{{ w.title }}</div>
            <span class="fb-card__arrow" aria-hidden="true">›</span>
          </div>

          <p class="fb-card__desc">{{ w.summary }}</p>
        </a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive } from "vue";
import { works } from "../data/works";

/**
 * 重要:
 * - グローバルCSSで .page は body.page-open が無いと非表示
 * - /works 直アクセス or リロード or cover→works 遷移でも白画面にならないよう
 *   このページ側で body.page-open を必ず付与する
 */
function ensurePageVisible() {
  document.body.classList.add("page-open");
  document.body.classList.add("is-ready");
  document.body.classList.remove("is-loading");
  document.body.classList.remove("nav-open");
}

function enableWorksScroll() {
  document.body.classList.add("is-works-scroll");

  // html 強制解除
  document.documentElement.style.overflowY = "auto";
  document.documentElement.style.overflowX = "hidden";

  // body 強制解除
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";

  // page container（このページだけスクロール）
  const page = document.querySelector(".page") as HTMLElement | null;
  if (page) {
    page.style.overflow = "auto";
    page.style.webkitOverflowScrolling = "touch";
  }
}

function disableWorksScroll() {
  document.body.classList.remove("is-works-scroll");

  // CSS制御へ戻す
  document.documentElement.style.overflowY = "";
  document.documentElement.style.overflowX = "";
  document.body.style.overflowY = "";
  document.body.style.overflowX = "";

  const page = document.querySelector(".page") as HTMLElement | null;
  if (page) {
    page.style.overflow = "";
    page.style.webkitOverflowScrolling = "";
  }
}

const thumbs = reactive<Record<string, string | null>>({});

async function fetchOg(url: string): Promise<string | null> {
  try {
    const res = await fetch(`/api/og?url=${encodeURIComponent(url)}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as { image?: string | null };
    return data?.image || null;
  } catch {
    return null;
  }
}

function setupNavInteractions() {
  const burger = document.querySelector(".site-burger") as HTMLElement | null;
  const drawer = document.querySelector(".site-drawer") as HTMLElement | null;
  const backdrop = document.querySelector(".nav-backdrop") as HTMLElement | null;

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

onMounted(async () => {
  // ✅ 白画面対策（/works直アクセス・リロード・遷移すべて）
  ensurePageVisible();

  // ✅ Worksだけ常時スクロール（既存仕様を維持）
  enableWorksScroll();

  // ✅ Nav
  setupNavInteractions();

  // ✅ OG画像を順に取得（軽く逐次）
  for (const w of works) {
    thumbs[w.id] = await fetchOg(w.url);
  }
});

onBeforeUnmount(() => {
  disableWorksScroll();
});
</script>

<style scoped>
h1 {
  text-align: center;
  /* margin: 0 0 26px; */
}

h1 span::before {
  content: "\A";
  white-space: pre;
}

.works-cards {
  width: min(1240px, calc(100% - 88px));
  margin: 18px auto 0;
  display: grid;
  gap: 18px;

  grid-template-columns: 1fr;
}

.fb-card__illust.is-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.fb-card__illust.is-img .fb-card__illust-inner {
  opacity: 0;
}

@media (min-width: 980px) {
  .works-cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 16px;
  }

  .works-cards :deep(.fb-card) {
    padding: 18px 18px 14px;
    border-radius: 16px;
  }

  .works-cards :deep(.fb-card__illust) {
    height: 120px;
    margin-bottom: 14px;
    border-radius: 12px;
  }

  .works-cards :deep(.fb-card__label) {
    font-size: 15px;
  }

  .works-cards :deep(.fb-card__desc) {
    font-size: 12.5px;
    line-height: 1.7;
  }
}

@media (min-width: 1350px) {
  .works-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .works-cards {
    width: min(760px, calc(100% - 48px));
    gap: 16px;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 425px) {
  .works-cards {
    width: calc(100% - 24px);
    gap: 14px;
    grid-template-columns: 1fr;
  }
}
</style>