import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component:Layout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router