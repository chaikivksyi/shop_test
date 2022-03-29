<template>
  <div class="order-item-wrapper">
    <img class="order-item-img" :src="`http://localhost:5006/uploads/${product.img}`">
    <div class="order-item-description">
      <router-link to="/Catalog/description" class="product-description">
        <h3>{{ product.title }}</h3>
      </router-link>
      <p>Цена:{{ product.price }}$</p>
      <p>Количество:
        <input class="input-edit-order" type="text"  required>шт.</p>
      <p> Сума:{{ product.price }}$</p>
      <div class="btn-item">
        <v-btn type="button" class=" btn btn-delete btn-card">X</v-btn>
      </div>
    </div>
</div>
</template>

<script>


export default {
  name: "WiCart-item",
  props: ['product'],
}
</script>

<style scoped>
.order-item-wrapper{
  display: flex;
  margin: 20px;
  border: 1px solid black;
}
.btn{
  border: 1px solid black;
  background: #C4C4C4;
}

.order-item-description{
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.order-item-img{
  width: 80px;
  height: 80px;
}
.btn-card{
  margin-bottom: 14px;
  width: 40px;
  padding: 10px;
}
.input-edit-order{
  border:2px solid black;
  width: 30px;
}
.product-description {
  text-decoration: none;
  color: black;
}
</style>