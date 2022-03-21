<template>
  <div class="w-50 m-auto p-4 border border-secondary mt-5">
    <h1 class="mt-5 text-center">Login</h1>
    <form @submit.prevent method="post" class="m-3">
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" v-model="user.email" class="form-control" name="email" id="email" placeholder="Enter email">
      </div>
      <div class="form-group mb-3">
        <label for="login-password">Password</label>
        <input type="password" v-model="user.password" class="form-control" name="password" id="login-password" placeholder="Enter password">
      </div>
      <button @click="loginUser" class="btn btn-primary w-50 d-block m-auto">Login</button>
    </form>
  </div>
</template>

<script>
import authResources from "@/resources/auth";

export default {
  name: "app-login",
  data() {
    return {
      user: {
        username: '',
        email: '',
        pwd: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser() {
      authResources.loginUser(this.user)
      .then(response => {
        if(response.status === 200) {
          this.$store.dispatch('SET_USER', true)
          this.$router.push({name: 'Home'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>