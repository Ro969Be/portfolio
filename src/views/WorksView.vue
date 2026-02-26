<template>
  <div class="panel">
    <div class="panel-head">
      <div class="panel-title">
        <h1>今日はどの実績を見ますか？</h1>
        <p>ページ全体は固定。右パネルだけが滑らかに切り替わります。</p>
      </div>
      <div class="kbd">Works</div>
    </div>

    <div class="panel-body">
      <WorkPicker
        :works="works"
        :activeId="activeId"
        :activeRouteName="String(route.name || '')"
        @pick="pick"
      />

      <div class="hr" style="margin:14px 0;"></div>

      <div class="card" style="background: rgba(0,0,0,.15);">
        <div class="card-inner" style="display:grid; gap:10px;">
          <div style="display:flex; justify-content:space-between; gap:12px; align-items:flex-start;">
            <div>
              <div class="muted" style="font-size:12px;">{{ active.id }} / {{ active.subtitle }}</div>
              <div style="font-size:18px; font-weight:700; margin-top:6px;">{{ active.title }}</div>
              <div class="muted" style="font-size:13px; margin-top:6px;">Role: {{ active.role }}</div>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end;">
              <a
                v-for="l in active.links"
                :key="l.href"
                class="btn"
                :href="l.href"
                target="_blank"
                rel="noreferrer"
                style="height:36px;"
              >
                {{ l.label }}
              </a>
            </div>
          </div>

          <div class="hr"></div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
            <div class="card" style="background: rgba(255,255,255,.03);">
              <div class="card-inner">
                <div class="muted" style="font-size:12px;">Scope</div>
                <ul style="margin:10px 0 0; padding-left:18px; color:var(--muted); line-height:1.7;">
                  <li v-for="s in active.scope" :key="s">{{ s }}</li>
                </ul>
              </div>
            </div>

            <div class="card" style="background: rgba(255,255,255,.03);">
              <div class="card-inner">
                <div class="muted" style="font-size:12px;">Outcome</div>
                <ul style="margin:10px 0 0; padding-left:18px; color:var(--muted); line-height:1.7;">
                  <li v-for="o in active.outcome" :key="o">{{ o }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="muted" style="font-size:12px; line-height:1.7;">
            ※ 実績詳細は“短く・切り替え中心”にして、スクロール無しでも気持ちよく見られる作りにしています。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import WorkPicker from "../components/WorkPicker.vue";
import { works, type Work } from "../data/works";

const route = useRoute();
const activeId = ref<Work["id"]>("01");

const active = computed(() => works.find(w => w.id === activeId.value) ?? works[0]);

function pick(id: Work["id"]) {
  activeId.value = id;
}
</script>

<style scoped>
@media (max-width: 980px){
  .panel-body > .card .card-inner > div[style*="grid-template-columns"]{
    grid-template-columns: 1fr !important;
  }
}
</style>