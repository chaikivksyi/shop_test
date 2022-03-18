<template>
  <div>
    <h1>Home</h1>

    <h1 class="mt-5">Register</h1>
    <form @submit.prevent method="post" class="m-3">
      <div class="form-group mb-3">
        <label for="username">Login</label>
        <input type="text" v-model="user.username" class="form-control" name="username" id="username" placeholder="Enter login">
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" v-model="user.email" class="form-control" name="email" id="email" placeholder="Enter email">
      </div>
      <div class="form-group mb-3">
        <label for="password">Password</label>
        <input type="password" v-model="user.password" class="form-control" name="password" id="password" placeholder="Enter password">
      </div>
      <div class="form-group mb-3">
        <label for="pwd">Password</label>
        <input type="password" v-model="user.pwd" class="form-control" name="pwd" id="pwd" placeholder="Repeat password">
      </div>
      <button @click="registerUser" class="btn btn-primary w-25">Register</button>
    </form>


    <h1 class="mt-5">Login</h1>
    <form @submit.prevent method="post" class="m-3">
      <div class="form-group mb-3">
        <label for="login-username">Login</label>
        <input type="text" v-model="user_login.username" class="form-control" name="username" id="login-username" placeholder="Enter login">
      </div>
      <div class="form-group mb-3">
        <label for="login-password">Password</label>
        <input type="password" v-model="user_login.password" class="form-control" name="password" id="login-password" placeholder="Enter password">
      </div>
      <button @click="loginUser" class="btn btn-primary w-25">Login</button>
    </form>

  </div>
</template>

<script>
import authResources from "@/resources/auth";

export default {
  name: "app-home",
  data() {
    return {
      user: {
        username: '',
        email: '',
        pwd: '',
        password: ''
      },
      user_login: {
        username: '',
        email: '',
        pwd: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser() {
      authResources.registerUser(this.user)
    },
    loginUser() {
      authResources.registerUser(this.user_login)
    }
  }
}
</script>

<style scoped>

</style>