<template>
  <div>
    <h1>Products</h1>
    {{products}}
  </div>
</template>

<script>
import productsResources from "@/resources/products";

export default {
  name: "app-products",
  data() {
    return {
      products: []
    }
  },
  created() {
    productsResources.getAllProducts()
        .then(response => {
          console.log(response)
          this.products = response.data
        }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>