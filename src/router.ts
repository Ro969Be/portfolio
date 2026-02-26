import { createRouter, createWebHistory } from "vue-router";
import WorksView from "./views/WorksView.vue";
import ContactView from "./views/ContactView.vue";
import DoneView from "./views/DoneView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "works", component: WorksView },
    { path: "/contact", name: "contact", component: ContactView },
    { path: "/done", name: "done", component: DoneView },
    { path: "/:pathMatch(.*)*", redirect: "/" }
  ],
  scrollBehavior() {
    // 「スクロール無し」を守る（常にトップ扱い）
    return { left: 0, top: 0 };
  }
});

export default router;