<template>
  <div class="Catalog">
    <h1>Наши товары:</h1>
    <div class="products-wrapper">
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
    </div>
  </div>
</template>

<script>
import CardProducts from "@/components/card-products";

export default {
  name: "Catalog-main",
  components:{
    CardProducts
  },
  methods:{

  }
}
</script>

<style scoped>
.products-wrapper{
  display: flex;
  flex-wrap: wrap;
}
</style>