<template>
<div class="left-menu">
    <h1>Каталог</h1>
    <ul>
      <li>Компютори</li>
      <li>Телефони</li>
      <li>Електоника</li>
    </ul>

</div>
</template>

<script>
export default {
  name: "Left-menu-main"
}
</script>

<style scoped>
.left-menu{
  width: 20%;
  background-image: -webkit-gradient(linear,left top,right top,from(#306a88),to(#7db9e8));
  text-align: center;
}
.left-menu ul{
  margin-top: 20px;
}
.left-menu ul li{
  color:white;
  height: 50px;
  list-style: none;
}
</style>