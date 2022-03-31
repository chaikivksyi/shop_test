<template>
  <div>
    <h3>{{this.categories}}</h3>
    <div class="categories-item-wrapper">
      <CardProducts v-for="category of categoryItem"
                    :key="category._id"
                    :product="category"
      />
      <h1>pagination</h1>
      <Pagination :countPages="countPages" :activePagination="Number(this.$route.query.page) || 1" @changePage="changePage" />
    </div>

  </div>

</template>

<script>
import axios from "axios";
import CardProducts from "@/components/card-products";
import Pagination from "@/components/Pagination";
let categories
export default {
  name: "Categories-item",
  components: {
    CardProducts,
    Pagination
  },
  data() {
    return {
      categoryItem: [],
      categories
    }
  },
  computed: {
    countPages: 'PRODUCTS/COUNT_PAGES',
  },
  methods:{
    changePage(n) {
      this.$router.push({name: 'Categories-item', query: {page: n, limit: this.$route.query.limit}})
          .then(() => {
            this.getProducts();
          })
    },
  },
  created(){
  },
  watch: {
    '$route.params.categories': {
      immediate: true,
      handler() {
        this.categories = this.$route.params.categories;
        axios.get('http://localhost:5006/api/products?page=1&limit=5').then((a) => {
          this.categoryItem = a.data.obj})
        console.log(this.categories)
      },
    },
  },
}
</script>

<style scoped>
.categories-item-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>