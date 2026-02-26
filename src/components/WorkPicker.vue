<template>
  <div style="display:flex; flex-wrap:wrap; gap:10px;">
    <button
      v-for="w in works"
      :key="w.id"
      class="pill"
      type="button"
      :style="w.id === activeId ? activeStyle : undefined"
      @click="$emit('pick', w.id)"
      :aria-pressed="w.id === activeId"
    >
      <span class="kbd">{{ w.id }}</span>
      <span style="font-size:13px;">{{ w.title }}</span>
    </button>

    <RouterLink
      class="pill"
      to="/contact"
      :style="activeRouteName === 'contact' ? activeStyle : undefined"
    >
      <span class="kbd">✉</span>
      <span style="font-size:13px;">Contact</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Work } from "../data/works";

defineProps<{
  works: Work[];
  activeId: Work["id"];
  activeRouteName: string;
}>();

defineEmits<{ (e: "pick", id: Work["id"]): void }>();

const activeStyle = {
  background: "rgba(124,92,255,.18)",
  borderColor: "rgba(124,92,255,.40)",
};
</script>