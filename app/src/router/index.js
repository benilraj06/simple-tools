import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Md5Encrypter from '../views/Md5Encrypter.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/md5', name: 'MD5 Encrypter', component: Md5Encrypter }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
