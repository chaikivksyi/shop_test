import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login')
    },
    // {
    //     path: '/register',
    //     name: 'Register',
    //     component: () => import('../views/register')
    // },
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/products')
    },
    {
        path: '/products/:id',
        name: 'Product',
        component: () => import('../views/product')
    },
    {
        path: '/category',
        name: 'Category',
        component: () => import('../views/category')
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/orders')
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('../views/users')
    },

]

// history: createWebHistory(process.env.BASE_URL),
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(  (to, from, next) => {
    // store.dispatch('GET_USER').then(() => {
    //
    // })
    const isAuth = store.getters.isAuthorization

    if (to.name !== 'Login' && !isAuth) next({ name: 'Login' })
    else if (to.name === 'Login' && isAuth) next({ name: 'Home' })
    else next();
})

export default router