<template>
<div class="wiCart-wrapper">
  <div class="wiCart-empty" >
    <h1>Ваша корзина пуста</h1>
    <router-link to="/Catalog" >
      <button class="btn">ПЕРЕЙТИ В КАТАЛОГ</button>
    </router-link>
  </div>

<!--<WiCartItem v-for="product of products"-->
<!--            :key="product._id"-->
<!--            :product="product"-->
<!--/>-->
<!--  <button type="button" class="btn">Подтвердить заказ</button>-->
</div>
</template>

<script>
// import WiCartItem from "@/components/Wicart-item";
import axios from "axios";
export default {
  name: "WiCart",
  components: {
    // WiCartItem
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
/*.btn{*/
/*  border: 1px solid black;*/
/*  color: whitesmoke;*/
/*  background: linear-gradient(0deg,#1771b9,#4aacfb);*/
/*  float: right;*/
/*  margin-right: 40px;*/
/*}*/
.wiCart-empty{
  text-align: center;
  margin-top: 120px;
}
.wiCart-empty h1{
  color:  #bababa;;
}
.wiCart-empty button.btn{
  width: 30%;
  margin-top: 30px;
}
</style>