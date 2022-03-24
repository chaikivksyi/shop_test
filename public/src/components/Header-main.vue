<template>
<div>
  <div id="nav">
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Logo Here</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Главная</router-link>
          <router-link to="/Catalog" class="nav-item nav-link">Каталог</router-link>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="indicator">
          <router-link to="/Profile" class="app__indicator nav-link">
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
.navbar-expand-lg .navbar-collapse {
  display: flex !important;
  justify-content: space-between;
}
.indicator{
  display: flex;
}

</style>