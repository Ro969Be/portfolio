<template>
  <aside class="card">
    <div class="card-inner">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
        <div>
          <div class="muted" style="font-size:12px;">Portfolio</div>
          <div style="font-size:18px; font-weight:700; margin-top:6px;">森井 將裕</div>
          <div class="muted" style="font-size:13px; margin-top:6px;">Web UI / Frontend（改修・運用更新）</div>
        </div>
        <div class="kbd">No Scroll</div>
      </div>

      <div class="hr" style="margin:14px 0;"></div>

      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="font-size:13px; color:var(--muted); line-height:1.75;">
          <b>既存サイトのデザイン修正</b>、<b>レスポンシブ最適化</b>、<b>運用更新</b>を中心に対応します。<br />
          「崩れない」「迷わない」「気持ちいい」を、画面遷移（＝パネル切替）とフィードバック設計で作ります。
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:6px;">
          <span class="kbd">UI Fix</span>
          <span class="kbd">Responsive</span>
          <span class="kbd">Vue</span>
          <span class="kbd">TypeScript</span>
          <span class="kbd">Pages+Workers</span>
        </div>

        <div style="display:flex; gap:10px; margin-top:10px;">
          <RouterLink class="btn primary" to="/contact">Contact</RouterLink>
          <RouterLink class="btn" to="/">Works</RouterLink>
        </div>

        <div class="muted" style="font-size:12px; line-height:1.7;">
          ※ このサイトはページ遷移ではなく、同一レイアウト内の“パネル切替”で体験を作っています。
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>