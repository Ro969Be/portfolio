<template>
  <header class="site-header" role="banner">
    <div class="site-header__inner">
      <RouterLink class="site-brand" to="/" aria-label="Morii's Portfolio" @click="close">
        <span class="site-brand__mark" aria-hidden="true">◎</span>
        <span class="site-brand__text">Morii's Portfolio</span>
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
        :aria-expanded="open ? 'true' : 'false'"
        @click.prevent.stop="toggle"
      >
        <span class="site-burger__lines" aria-hidden="true"></span>
      </button>
    </div>

    <div class="site-drawer" :aria-hidden="open ? 'false' : 'true'" @click.stop>
      <RouterLink class="site-drawer__link" to="/works" @click="close">実績</RouterLink>
      <RouterLink class="site-drawer__link" to="/contact" @click="close">お問い合わせ</RouterLink>
      <a class="site-drawer__link" href="https://github.com/Ro969Be" target="_blank" rel="noopener" @click="close">GitHub</a>
    </div>
  </header>

  <div class="nav-backdrop" aria-hidden="true" @click.prevent="close"></div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);
const burgerEl = ref<HTMLButtonElement | null>(null);

const route = useRoute();

function close() {
  open.value = false;
  document.body.classList.remove("nav-open");
}

function openNav() {
  open.value = true;
  document.body.classList.add("nav-open");
}

function toggle() {
  open.value ? close() : openNav();
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && open.value) close();
}

function onBodyClick() {
  // ドロワー外をクリックしたら閉じる（backdropが取れないケースの保険）
  if (open.value) close();
}

// ✅ ルートが変わったら必ず閉じる（戻る/進む/プログラム遷移でも開きっぱなしにしない）
watch(
  () => route.fullPath,
  () => {
    if (open.value) close();
  }
);

// ✅ 開閉でフォーカスを戻す（地味に“作りが丁寧”に見える）
watch(
  () => open.value,
  async (v) => {
    if (!v) {
      await nextTick();
      burgerEl.value?.focus?.();
    }
  }
);

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  document.body.addEventListener("click", onBodyClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.removeEventListener("click", onBodyClick);
  close();
});
</script>