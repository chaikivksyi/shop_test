<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark left-menu"
       :class="{'full': !$store.getters.SHOW_MENU_LEFT}"
  >
    <div class="toggle-left-menu" @click="$store.dispatch('TOGGLE_LEFT_MENU')"></div>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item my-2" v-for="(link, i) of links" :key="link.route">
        <router-link :to="'/' + link.route" class="nav-link text-white d-flex align-items-center" :class="['nav-link', {'active': $route.name === link.name}]">
          <div class="icon-menu">
            <img :src="require(`@/assets/img/menu-icons/${++i}-active.svg`)" alt="logo">
          </div>
          <span>{{ link.name }}</span>
        </router-link>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Left-menu",
  data() {
    return {
      links: [
        { route: 'products', name: 'Products' },
        { route: 'category', name: 'Category' },
        { route: 'users', name: 'Users' },
        { route: 'orders', name: 'Orders' },
        { route: 'images', name: 'Images' },
        { route: 'profile', name: 'Profile' },
        { route: 'banners', name: 'Banners' },
      ]
    }
  }
}
</script>

<style scoped>

</style>