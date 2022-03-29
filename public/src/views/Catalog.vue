<template>
  <div class="Catalog">
    <h1>Наши товары:</h1>
    <div class="products-wrapper">
      <CardProducts v-for="product of products"
                    :key="product._id"
                    :product="product"
      />
    </div>
  </div>
</template>

<script>
import CardProducts from "@/components/card-products";
import axios from 'axios'

export default {
  name: "Catalog-main",
  data() {
    return {
      products: []
    }
  },
  components:{
    CardProducts
  },
  created(){
    axios.get('http://localhost:5006/api/products').then((a) => {
      this.products = a.data.obj
      console.log( this.products)
    })
  }
}
</script>

<style scoped>
.products-wrapper{
  display: flex;
  flex-wrap: wrap;
}
</style>