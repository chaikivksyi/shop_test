import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/products')
    }
]

// history: createWebHistory(process.env.BASE_URL),
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router