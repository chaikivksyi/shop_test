<template>
  <nav class="navbar navbar-expand-lg px-3 navbar-dark bg-dark text-white d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <router-link to="/" >
        <img :src="require('@/assets/img/logo.png')" style="height: 40px" alt="">
      </router-link>
      <h4 class="page-title">{{ $route.name }}</h4>
<!--      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
    </div>

    <div class="d-flex align-items-center" style="height: 45px">
      <ul class="navbar-nav">
        <li class="nav-item">Admin</li>
        <li class="nav-item" @click.prevent="exitUser">Exit</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import authResources from "@/resources/auth";

export default {
  name: "app-header",
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