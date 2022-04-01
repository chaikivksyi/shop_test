<template>
<div class="wiCart-wrapper">
  <div class="wiCart-empty" v-if="!products" >
    <h1>Ваша корзина пуста</h1>
    <router-link to="/Catalog" >
      <button class="btn">ПЕРЕЙТИ В КАТАЛОГ</button>
    </router-link>
  </div>
<div class="wiCart-content" v-else>
  <div v-for="product of products"
       :key="product._id"
    >
    <div v-if="isexist(product.title)">
      <WiCartItem
          :product="product"
          @remove="removeBaskets"
      />
    </div>


  </div>
  <button type="button" class="btn">Подтвердить заказ</button>
</div>
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
  methods: {
    isexist(name) {
      let currentId = sessionStorage.getItem(name);
      if (currentId) {
        return true
      } else {
        return false
      }
    },
    removeBaskets(title){
      this.products.map((item, i) => {
        if(item.title == title) {
          this.products.splice(i, 1)
          sessionStorage.removeItem(title);
        }
      })
    },
  },
    created() {

      const { page = 1, limit = 10 } = this.$route.query
      axios.get(`http://localhost:5006/api/products?page=${page}&limit=${limit}&category=all`).then((a) => {
        this.products = a.data.obj
      })
  },
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