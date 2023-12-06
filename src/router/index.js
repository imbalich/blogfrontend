import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import BlogDetail from "@/views/BlogDetail.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/article/:id",
    name: "BlogDetail",
    component: BlogDetail,
  },

]

const router = createRouter({
  // https://next.router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHistory(),
  routes,
})

export default router