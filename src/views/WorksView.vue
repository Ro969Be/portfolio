<template>
  <div class="page works-page">
    <AppHeader />

    <main class="site-main" role="main">
      <h1 class="works-title">
        実績・制作事例
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
          :aria-label="`${w.title} を開く`"
        >
          <div class="fb-card__num">
            {{ String(idx + 1).padStart(2, "0") }}
          </div>

          <div
            class="fb-card__illust"
            aria-hidden="true"
            :class="{ 'is-img': !!thumbs[w.id] }"
            :style="
              thumbs[w.id]
                ? { backgroundImage: `url('${thumbs[w.id]}')` }
                : undefined
            "
          >
            <div class="fb-card__illust-inner">
              {{ w.url.includes("github.com") ? "LINK" : "WORK" }}
            </div>
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
import AppHeader from "../components/AppHeader.vue";
import { ogpImage } from "../utils/og";

function ensurePageVisible() {
  document.body.classList.add("page-open", "is-ready");
  document.body.classList.remove("is-loading", "nav-open");
}

function enableWorksScroll() {
  document.body.classList.add("is-works-scroll");

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

function disableWorksScroll() {
  document.body.classList.remove("is-works-scroll");

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

/* ===== scroll restore + header/parallax ===== */
function bindPageScrollUX() {
  const page = document.querySelector(".page") as HTMLElement | null;
  if (!page) return () => {};

  const KEY = "scroll:/works";
  const saved = sessionStorage.getItem(KEY);
  if (saved) page.scrollTop = Number(saved);

  let raf = 0;

  const onScroll = () => {
    if (raf) return;

    raf = requestAnimationFrame(() => {
      raf = 0;

      const y = page.scrollTop || 0;
      sessionStorage.setItem(KEY, String(y));

      if (y > 8) document.body.classList.add("is-scrolled");
      else document.body.classList.remove("is-scrolled");

      const p = Math.min(y * 0.08, 24);
      document.documentElement.style.setProperty(
        "--hero-parallax",
        `${p}px`
      );
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

const thumbs = reactive<Record<string, string | null>>({});
let unbindUX: null | (() => void) = null;

onMounted(() => {
  ensurePageVisible();
  enableWorksScroll();

  unbindUX = bindPageScrollUX();

  for (const w of works) {
    thumbs[w.id] = ogpImage(w.url);
  }
});

onBeforeUnmount(() => {
  unbindUX?.();
  disableWorksScroll();
});
</script>

<style scoped>
/* ===============================
   TITLE
=============================== */
.works-title {
  text-align: center;
}

.works-title span::before {
  content: "\A";
  white-space: pre;
}

/* ===============================
   GRID
=============================== */
.works-cards {
  width: min(1240px, calc(100% - 88px));
  margin: 18px auto 0;
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;
}

/* ===============================
   THUMB IMAGE
=============================== */
.fb-card__illust.is-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.fb-card__illust.is-img .fb-card__illust-inner {
  opacity: 0;
}

/* ===============================
   CARD UX IMPROVEMENT ⭐
=============================== */
.fb-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.fb-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.fb-card:hover .fb-card__label {
  color: #2c2c2c;
}

.fb-card__arrow {
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0.7;
}

.fb-card:hover .fb-card__arrow {
  transform: translateX(4px);
  opacity: 1;
}

/* keyboard accessibility */
.fb-card:focus-visible {
  outline: 2px solid rgba(162, 77, 68, 0.35);
  outline-offset: 4px;
}

/* ===============================
   DESKTOP
=============================== */
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

/* ===============================
   TABLET / MOBILE
=============================== */
@media (max-width: 768px) {
  .works-cards {
    width: min(760px, calc(100% - 48px));
    gap: 16px;
  }
}

@media (max-width: 425px) {
  .works-cards {
    width: calc(100% - 24px);
    gap: 14px;
  }
}
</style>