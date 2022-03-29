<template>
  <div class="products-wrapper">
      <div class="products" >

        <router-link  class="product-description"
                      :to="{ name: 'Product-description-item', params: { slug: product.title}}">
        <img class="products-item-img" :src="`http://localhost:5006/uploads/${product.img}`">
        <h3>{{ product.title }}</h3>
        </router-link>
        <p>Цена:{{ product.price }}$</p>
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
  name: "card-products",
  props: ['product'],

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