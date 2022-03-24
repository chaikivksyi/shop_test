<template>
  <div class="description-wrapper">
    <div class="back_catalog">
      <router-link to="/Catalog" class="product-description">
        <button>Больше товаров</button>
      </router-link>
    </div>
    <div class="description-item">
      <div class="images-description">
        <img class="img-description" src="../assets/images/apple13.jpg" alt="img">
      </div>
      <div class="content-description">
        <h3>Смартфон Apple iPhone 13 128GB Blue (MLPK3)</h3>
        <img src="../assets/images/rating.png">
        <p>Цена:20$</p>
        <router-link to="/WiCart">
          <button class="btn-products">Купить</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product-description-item"
}
</script>

<style scoped>
.description-item{
  display: flex;
  justify-content: space-around;
}
.back_catalog button{
  margin: 20px;
  color: whitesmoke;
  background: linear-gradient(0deg,#1771b9,#4aacfb);
}

</style>