import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path:"/",
    name:"Home",
    component: Home,
  },

]

const router = createRouter({
  // https://next.router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHistory(),
  routes,
});

export default router;