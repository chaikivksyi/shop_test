<template>
<div class="favorite-empty">
  <h1>У Вас нет избранных товаров</h1>
  <router-link to="/Catalog" >
  <button class="btn">ПЕРЕЙТИ В КАТАЛОГ</button>
  </router-link>
</div>
</template>

<script>
export default {
  name: "Favorites-products"
}
</script>

<style scoped>
.favorite-empty{
  text-align: center;
  margin-top: 120px;
}
.favorite-empty h1{
  color:  #bababa;;
}
.favorite-empty .btn{
  width: 30%;
  margin-top: 30px;
}
</style>