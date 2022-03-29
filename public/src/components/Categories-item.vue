<template>
  <div>
    <h3>{{this.categories}}</h3>
    <div class="categories-item-wrapper">
      <CardProducts v-for="category of categoryItem"
                    :key="category._id"
                    :product="category"
      />
    </div>
  </div>

</template>

<script>
import axios from "axios";
import CardProducts from "@/components/card-products";
let categories
export default {
  name: "Categories-item",
  components: {
    CardProducts,
  },
  computed:{
    countPages: 'PRODUCTS/COUNT_PAGES',
  },
  data() {
    return {
      categoryItem: [],
      categories
    }
  },
  created(){
    this.categories = this.$route.params.categories;
    axios.get('http://localhost:5006/api/products?page=1&limit=5').then((a) => {
      this.categoryItem = a.data.obj
      console.log(this.categories)
    })
  }
}
</script>

<style scoped>
.categories-item-wrapper{
  display: flex;
  flex-wrap: wrap;
}
</style>