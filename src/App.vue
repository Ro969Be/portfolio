<template>
  <div class="container">
    <header class="topbar">
      <div class="brand">
        <strong>Portfolio</strong>
        <span class="muted">Panel Switch UI</span>
      </div>

      <nav class="toplinks">
        <a class="pill" href="https://github.com/Mori-Chan" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a class="pill" href="https://github.com/Ro969Be" target="_blank" rel="noreferrer">
          GitHub2
        </a>
      </nav>
    </header>

    <main class="shell">
      <LeftProfile />

      <section class="card panel">
        <Transition name="fade-slide" mode="out-in">
          <RouterView />
        </Transition>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import LeftProfile from "./components/LeftProfile.vue";
</script>