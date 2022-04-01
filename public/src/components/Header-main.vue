<template>
<div>
  <div id="nav">
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="router-home">
        <img src="../assets/images/logo.png" style="height: 40px" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/Catalog" class="nav-item nav-link">
            <img  src="../assets/images/catalog.png" alt="">
          </router-link>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="indicator">
          <router-link to="/User" class="app__indicator nav-link">
            <img  src="../assets/images/profile.png" alt="">
          </router-link>
          <router-link to="/Favorites" class="app__indicator nav-link">
            <img  src="../assets/images/like.png" alt="">
          </router-link>
          <router-link to="/WiCart" class="app__indicator nav-link">
            <img  src="../assets/images/shopping-cart.png" alt="">
          </router-link>
        </div>
      </div>
    </nav>
  </div>

</div>
</template>

<script>
export default {
  name: "Header-main"
}
</script>

<style scoped>
#nav {
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.form-control{
  width: 400px;
}
#nav a.router-link-exact-active {
  color: whitesmoke;
  background: linear-gradient(0deg,#1771b9,#4aacfb);
  border-radius: .5rem;
}
 #nav a.router-link-exact-active.router-home{
  font-weight: bold;
  color: #2c3e50;
  background: none;
}
.navbar-expand-lg .navbar-collapse {
  display: flex !important;
  justify-content: space-around;
}
.indicator{
  display: flex;
}

</style>