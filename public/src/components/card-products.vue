<template>
  <div class="products-wrapper">
      <div class="products" >
        <svg class="favorites-item" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        <router-link  class="product-description"
                      :to="{ name: 'Product-description-item', params: { categories:product.category, slug: product.title}}">
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
.favorites-item{
  position: absolute;
  margin-left: 140px;
  cursor: pointer;
  margin-top: 10px;
  fill: white;
  stroke:#1771b9;
}
.favorites-item:hover{
  fill: #1771b9;;
}

</style>