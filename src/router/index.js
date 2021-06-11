import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import SubmitStory from '@/views/SubmitStory'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/submit',
    name: 'Submit Story',
    component: SubmitStory,
  },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
