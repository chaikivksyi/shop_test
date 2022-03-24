import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import WiCart from '../views/Wicart.vue';
import Catalog from '../views/Catalog';
import ProductDescription from '../components/Product-description-item';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/WiCart',
    name: 'WiCart',
    component: WiCart
  },
  {
    path: '/Catalog',
    name: 'Catalog-main',
    component: Catalog
  },
  {
    path: '/Catalog/description',
    name: 'Product-description-item',
    component: ProductDescription
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router