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

        <div 
          class="nav-dropdown" 
          @mouseenter="showGithub = true" 
          @mouseleave="showGithub = false"
        >
          <button 
            class="site-nav__link nav-dropdown__trigger" 
            :class="{ 'is-active': showGithub }"
            type="button"
          >
            GitHub
            <span class="nav-dropdown__arrow"></span>
          </button>
          
          <transition name="menu-pop">
            <div v-if="showGithub" class="nav-dropdown__menu">
              <a href="https://github.com/Ro969Be" target="_blank" rel="noopener" class="nav-dropdown__item">
                <span class="nav-dropdown__label">GitHub (現行)</span>
                <span class="nav-dropdown__desc">メインアカウント</span>
              </a>
              <a href="https://github.com/Mori-Chan" target="_blank" rel="noopener" class="nav-dropdown__item is-legacy">
                <span class="nav-dropdown__label">GitHub (過去)</span>
                <span class="nav-dropdown__desc">参照用アーカイブ</span>
              </a>
            </div>
          </transition>
        </div>
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
      
      <div class="drawer-subheading">GitHub</div>
      <a class="site-drawer__link is-sub" href="https://github.com/Ro969Be" target="_blank" @click="close">現行アカウント</a>
      <a class="site-drawer__link is-sub" href="https://github.com/Mori-Chan" target="_blank" @click="close">旧アカウント</a>
    </div>
  </header>

  <div class="nav-backdrop" aria-hidden="true" @click.prevent="close"></div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);
const showGithub = ref(false);
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

watch(() => route.fullPath, () => { if (open.value) close(); });

onMounted(() => {
  document.body.addEventListener("click", () => { if (open.value) close(); });
});
</script>

<style scoped>
.nav-dropdown {
  position: relative;
  display: inline-block;
  padding-bottom: 15px; 
  margin-bottom: -15px;
}

.nav-dropdown__trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-dropdown__arrow {
  width: 8px;
  height: 8px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.3s var(--ease);
  opacity: 0.5;
}

.nav-dropdown__trigger.is-active .nav-dropdown__arrow {
  transform: translateY(2px) rotate(-135deg);
}

.nav-dropdown__menu {
  position: absolute;
  top: 85%; 
  right: -10px;
  width: 220px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--r-m);
  box-shadow: var(--shadow-md);
  padding: 8px;
  z-index: 200;
  backdrop-filter: blur(10px);
  margin-top: 0; 
}

.nav-dropdown__menu::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  display: block;
}

.nav-dropdown__item {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: var(--r-s);
  transition: background 0.2s var(--ease);
}

.nav-dropdown__item:hover {
  background: rgba(44, 44, 44, 0.04);
}

.nav-dropdown__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
}

.nav-dropdown__desc {
  font-size: 11px;
  color: var(--text-mute);
  margin-top: 2px;
}

.menu-pop-enter-active {
  transition: all 0.3s var(--ease);
}
.menu-pop-leave-active {
  transition: all 0.2s ease-in;
}
.menu-pop-enter-from, .menu-pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.drawer-subheading {
  padding: 24px 0 8px;
  font-size: 11px;
  color: var(--text-mute);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-top: 1px solid var(--border-weak);
  margin-top: 8px;
}

.site-drawer__link.is-sub {
  padding-left: 16px;
  font-size: 13px;
  opacity: 0.8;
}
</style>