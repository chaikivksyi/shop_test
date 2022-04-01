<template>
  <div class="Catalog">
    <h1>Наши товары:</h1>
    <div class="products-wrapper">
      <CardProducts v-for="product of products"
                    :key="product._id"
                    :product="product"
                    @addToWish="addToWish"
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
  methods: {
    addToWish(result) {
      this.products.map((item) => {
        if(item._id == result.id) {
          item.wish = !result.status
        }
      })
    }
  },
  created(){
    const { categories = 'all' } = this.$route.params
    const { page = 1, limit = 10 } = this.$route.query
    axios.get(`http://localhost:5006/api/products?page=${page}&limit=${limit}&category=${categories}`).then((a) => {
      this.products = a.data.obj
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