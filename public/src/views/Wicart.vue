<template>
<div>
<WiCartItem v-for="product of products"
            :key="product._id"
            :product="product"
/>

  <v-btn type="button" class="btn">Подтвердить заказ</v-btn>
</div>
</template>

<script>
import WiCartItem from "@/components/Wicart-item";
import axios from "axios";
export default {
  name: "WiCart",
  components: {
    WiCartItem
  },
  data() {
    return {
      products: []
    }
  },
  created(){
    axios.get('http://localhost:5006/api/products').then((a) => {
      console.log(a.data)
      this.products = a.data.obj
    })
  }
}
</script>

<style scoped>
.btn{
  border: 1px solid black;
  color: whitesmoke;
  background: linear-gradient(0deg,#1771b9,#4aacfb);
  float: right;
  margin-right: 40px;
}
</style>