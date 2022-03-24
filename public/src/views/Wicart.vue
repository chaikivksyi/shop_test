<template>
<div>
<WiCartItem/>
<WiCartItem/>
<WiCartItem/>
<WiCartItem/>
  <v-btn type="button" class="btn">Подтвердить заказ</v-btn>
</div>
</template>

<script>
import WiCartItem from "@/components/Wicart-item";
export default {
  name: "WiCart",
  components: {
    WiCartItem
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