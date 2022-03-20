<template>
  <div>
    <button class="brn btn-primary" @click="this.$router.back()">&#8656;Go to back</button>
    <h1>Product</h1>
    {{ product }}
  </div>
</template>

<script>
import productsResources from "@/resources/products";


export default {
  name: "app-product",
  data() {
    return {
      product: null,
      categories: null,
    }
  },
  created() {
    const id = this.$route.params.id
    productsResources.getProduct(id).then(response => {
      console.log(response)
      this.product = response.data;
    }).catch(err => {
      console.log(err)
    });

  }
}
</script>

<style scoped>

</style>