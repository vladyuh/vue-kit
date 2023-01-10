import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home'
import PageNotFound from "@/views/404";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "*",
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
