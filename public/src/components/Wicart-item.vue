<template>
  <div class="order-item-wrapper">
    <img class="order-item-img" :src="`http://localhost:5006/uploads/${product.img}`">
    <div class="order-item-description">
      <router-link  class="product-description"
                    :to="{ name: 'Product-description-item', params: { categories:product.category, slug: product.title,slugId:product._id}}">
        <h3>{{ product.title }}</h3>
      </router-link>
      <p>Цена:{{ product.price }}$</p>
      <p>Количество:
        <input  id="inputCount" class="input-edit-order" type="number" value="1">шт.</p>
      <p> Сума:{{ product.price }}$</p>
      <div class="btn-item">
        <button type="button" @click="$emit('remove', product.title)" class=" btn btn-delete btn-card">X</button>
      </div>
    </div>
</div>
</template>

    <script>


      export default {
        name: "WiCart-item",
        data: function() {
          return {
            count: Number,
            priceProduct:Number,
            suma:Number
          }
        },
        props: ['product'],
      created() {

      },
        methods:{

        }
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
  float: right;
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