<template>
  <div class="description-wrapper">
    <div class="back_catalog">
      <router-link to="/Catalog" class="product-description">
        <button>Больше товаров</button>
      </router-link>
    </div>
      <div class="description-item" >
        <div class="images-description">
          <img class="products-item-img" :src="`http://localhost:5006/uploads/${product.img}`">
        </div>
        <div class="content-description">
          <h3>{{product.title}}</h3>
          <img src="../assets/images/rating.png">
          <p>Цена:{{ product.price }}$</p>
          <router-link to="/WiCart">
            <button class="btn-products">Купить</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";
let slug
export default {
  name: "Product-description-item",
  data() {
    return {
      product: null,
      slug,
    }
  },
  created() {
    const id = this.$route.params.slug
    axios.get(`http://localhost:5006/api/products/detail/${id}`).then((a) => {
        this.product = a.data
    })
  }
}
</script>

<style scoped>
.description-item{
  display: flex;
  justify-content: space-around;
}
.back_catalog button{
  margin: 20px;
  color: whitesmoke;
  background: linear-gradient(0deg,#1771b9,#4aacfb);
}

</style>