import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home'
import ComponentsView from "@/views/components";
import PageNotFound from "@/views/404";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsView
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
