<template>
  <div class="products-wrapper">
      <div class="products" >
        <router-link to="/Catalog/description" class="product-description">
        <img class="products-item-img" src="../assets/images/apple13.jpg" alt="img">
        <h3>Iphone 13</h3>
        </router-link>
        <p>Цена:20$</p>
        <div class="rating_block">
         <img src="../assets/images/rating.png">
        </div>
        <router-link to="/WiCart">
        <button class="btn-products">Купить</button>
        </router-link>
      </div>


  </div>
</template>

<script>
export default {
  name: "card-products"
}
</script>

<style scoped>
.products-wrapper{
  margin: 12px;
}
.products{
  height: 100%;
  width: 200px;
  border: 1px solid black;
  padding: 12px;
  text-align: center;
}
.products a{
  text-decoration: none;
  color: black;
}
.products-item-img{
  width: 100%;
  height: 180px;
}
.product-description{
  cursor: pointer;
}


</style>