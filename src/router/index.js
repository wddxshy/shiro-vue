import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Login from "@/components/Login";
import User from "@/components/User";
import Register from "@/components/Register";

Vue.use(VueRouter)

  const routes = [
  { path: '/',component: Home },
    { path: '/login', component: Login },
    { path: '/user',component: User },
    { path: '/registerPage',component: Register}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
