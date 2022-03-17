<template>
  <div>
    <Header />
    <div class="container">
      <h1>test</h1>
      <Products />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Products from "@/views/products";



export default {
  name: 'App',
  components: {
    Header,
    Products
  }
}
</script>

