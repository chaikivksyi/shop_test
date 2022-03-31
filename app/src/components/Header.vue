<template>
  <header>
    <nav class="navbar navbar-expand-lg px-3 navbar-dark bg-dark text-white d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <router-link to="/" >
          <img :src="require('@/assets/img/logo.png')" alt="logo" class="logo">
        </router-link>
        <h4 class="page-title">{{ $route.name }}</h4>
        <!--      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
        <!--        <span class="navbar-toggler-icon"></span>-->
        <!--      </button>-->
      </div>
      <div class="dropdown show">
        <div class="d-flex align-items-center navbar-right" style="height: 45px" @click="user_dropdown = !user_dropdown">
          <ul class="navbar-nav d-flex align-items-center">
            <li class="nav-item name">Admin</li>
            <li class="nav-item mr-0 avatar">
              <img :src="require('@/assets/img/ava.png')" alt="logo">
            </li>
          </ul>
        </div>
        <div class="dropdown-menu" :class="{'show': user_dropdown}">
          <a class="dropdown-item" href="#" @click.prevent="$router.push({name: 'Profile'})">Profile</a>
          <a class="dropdown-item" href="#" @click.prevent="exitUser">Exit</a>
        </div>
      </div>

    </nav>
  </header>
</template>

<script>
import authResources from "@/resources/auth";

export default {
  name: "app-header",
  data() {
    return {
      user_dropdown: false
    }
  },
  methods: {
    exitUser() {
      authResources.userLogout()
          .then(response => {
            if(response.status === 200) {
              this.$store.dispatch('SET_USER', false)
              this.$router.push({name: 'Login'})
            }
          })
    },
  }
}
</script>

<style scoped>

</style>