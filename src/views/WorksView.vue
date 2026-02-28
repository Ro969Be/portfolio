<template>
  <div class="works-page">
    <div class="works-inner">
      <header class="works-head">
        <h1 class="works-title">実績</h1>
        <p class="works-sub">公開可能な範囲で掲載しています。</p>
      </header>

      <section class="works-list" aria-label="works list">
        <article
          v-for="w in works"
          :key="w.id"
          class="work-card"
          :id="w.id"
        >
          <div class="work-top">
            <div class="work-title">{{ w.title }}</div>
            <a class="work-link" :href="w.url" target="_blank" rel="noopener">
              表示する ›
            </a>
          </div>

          <div v-if="w.client" class="work-client">{{ w.client }}</div>
          <p class="work-summary">{{ w.summary }}</p>

          <ul class="work-tags" aria-label="tags">
            <li v-for="t in w.tags" :key="t" class="work-tag">{{ t }}</li>
          </ul>

          <ul v-if="w.notes?.length" class="work-notes" aria-label="notes">
            <li v-for="n in w.notes" :key="n">{{ n }}</li>
          </ul>
        </article>
      </section>

      <div class="works-cta">
        <RouterLink class="works-cta__btn" to="/contact">お問い合わせへ</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { works } from "../data/works";
</script>

<style scoped>
/* 既存デザインを壊さない“薄い”スタイル（色味変更OKの範囲） */
.works-page {
  min-height: 100svh;
  background: var(--page-bg);
  color: rgba(0, 0, 0, 0.78);
  padding: 26px 0 64px;
}
.works-inner {
  width: min(1060px, calc(100% - 64px));
  margin: 0 auto;
}
.works-head {
  margin-bottom: 18px;
}
.works-title {
  margin: 0;
  font-size: 28px;
  letter-spacing: 0.04em;
  font-weight: 600;
}
.works-sub {
  margin: 6px 0 0;
  opacity: 0.72;
}
.works-list {
  display: grid;
  gap: 14px;
}
.work-card {
  background: rgba(255, 255, 255, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  padding: 16px 16px 14px;
}
.work-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
}
.work-title {
  font-weight: 600;
  letter-spacing: 0.02em;
}
.work-link {
  font-size: 13px;
  opacity: 0.78;
}
.work-link:hover {
  opacity: 1;
}
.work-client {
  margin-top: 6px;
  font-size: 12px;
  opacity: 0.65;
}
.work-summary {
  margin: 10px 0 10px;
  font-size: 13.5px;
  line-height: 1.9;
  opacity: 0.82;
}
.work-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.work-tag {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.work-notes {
  margin: 10px 0 0;
  padding-left: 18px;
  font-size: 12.5px;
  line-height: 1.8;
  opacity: 0.75;
}
.works-cta {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
}
.works-cta__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>