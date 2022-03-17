<template>
  <div>
    <Header />
    <div class="container">
      <h1>test</h1>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import productsResources from "@/resources/products";

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    productsResources.getAllProducts()
        .then(response => {
          console.log(response)
        }).catch(error => {
      console.log(error)
    })
  }
}
</script>

