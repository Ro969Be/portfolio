import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import WorksView from "./views/WorksView.vue";
import ContactView from "./views/ContactView.vue";
import DoneView from "./views/DoneView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },

    { path: "/works", name: "works", component: WorksView },
    { path: "/contact", name: "contact", component: ContactView },

    { path: "/newsletter", redirect: "/works" },
    { path: "/company", redirect: "/works" },

    { path: "/done", name: "done", component: DoneView },

    // /marutto-regi(旧 LP)は POS 本体の LP へ外部遷移.ポートフォリオには置かない.
    { path: "/marutto-regi", redirect: "/works" },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],

  scrollBehavior(to, from, savedPosition) {
    // ブラウザ戻る/進む
    if (savedPosition) return savedPosition;

    // 基本は先頭
    return { left: 0, top: 0 };
  },
});