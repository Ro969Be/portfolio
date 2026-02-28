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

    // “見た目は同じ”で、遷移先だけ置換（旧リンク互換）
    { path: "/newsletter", redirect: "/works" },
    { path: "/company", redirect: "/works" },

    { path: "/done", name: "done", component: DoneView },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});