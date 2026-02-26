<template>
  <div class="panel">
    <div class="panel-head">
      <div class="panel-title">
        <h1>送信完了</h1>
        <p>ありがとうございます。内容を確認して折り返します。</p>
      </div>
      <div class="kbd">Done</div>
    </div>

    <div class="panel-body">
      <div class="card" style="background: rgba(0,0,0,.15);">
        <div class="card-inner" style="display:grid; gap:12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div
              style="width:34px;height:34px;border-radius:12px;background:rgba(70,211,154,.18);border:1px solid rgba(70,211,154,.35);
                     display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--ok);"
            >✓</div>
            <div>
              <div style="font-weight:700;">送信が完了しました</div>
              <div class="muted" style="font-size:13px; margin-top:4px;">通常 24時間以内にご返信します。</div>
            </div>
          </div>

          <div class="hr"></div>

          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <RouterLink class="btn primary" to="/">Works に戻る</RouterLink>
            <RouterLink class="btn" to="/contact">もう一度送る</RouterLink>
          </div>

          <div class="muted" style="font-size:12px; line-height:1.7;">
            ※ この完了画面も同一レイアウト内の“パネル切替”です（ページリロード無し）。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>