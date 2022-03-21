<template>
  <div class="p-5">
    <router-link v-for="link of links"
                 :to="link.link"
                 :key="link.link"
                 :style="{ backgroundColor: link.bg}"
                 class="d-flex align-items-center justify-content-center home-link mb-4"
    >
      <h1>{{ link.name }}</h1>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "app-home",
  data() {
    return {
      links: [
        {name: 'Products', link: '/products', bg: '#16645c'},
        {name: 'Categories', link: '/category', bg: '#246416FF'},
        {name: 'Users', link: '/users', bg: '#644216FF'},
        {name: 'Orders', link: '/orders', bg: '#A21E1EFF'},
      ]
    }
  }
}
</script>

<style scoped>

</style>