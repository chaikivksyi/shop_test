<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/category" class="nav-link">Category</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/orders" class="nav-link">Orders</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item position-absolute out">
          <a href="#" class="nav-link" @click.prevent="exitUser">Exit</a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: "app-header",
  methods: {
    exitUser() {
      localStorage.removeItem('user')
      this.$store.dispatch('SET_USER', false)
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>

</style>