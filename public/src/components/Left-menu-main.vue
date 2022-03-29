<template>
<div class="left-menu">
    <h1>Каталог</h1>
    <div v-for="category of categories"
        :key="category._id">
      <router-link  class="category-description"
                    :to="{ name: 'Categories-item', params: { categories: category.name}}">
        <h3>{{category.name}}</h3>
      </router-link>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Left-menu-main",
  data() {
    return {
      categories: []
    }
  },
  created(){
    axios.get('http://localhost:5006/api/categories').then((a) => {
      this.categories = a.data
    })
  }
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
.category-description{
  color:white;
  height: 50px;
  text-decoration: none;
}
</style>