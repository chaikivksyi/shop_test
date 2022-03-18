<template>
  <div>
    <h1>Products</h1>
    <form @submit.prevent method="post" class="m-3">
      <div class="form-group mb-3">
        <label for="title">Title</label>
        <input type="text" v-model="product.title" class="form-control" name="title" id="title" placeholder="Enter title">
      </div>
      <div class="form-group mb-3">
        <label for="price">Price</label>
        <input type="number" v-model="product.price" class="form-control" name="price" id="price" placeholder="Enter price">
      </div>
      <div class="form-group mb-3">
        <label for="category">Category</label>
        <select v-model="product.category" id="category" name="category" class="form-select">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <button @click="addProduct(product)" class="btn btn-primary w-25">Submit</button>
    </form>
    <table class="table mt-5">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Category</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) of products" :key="product._id">
        <th scope="row">{{ ++index }}</th>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>@{{ product.category }}</td>
        <td>
          <button class="btn btn-danger" @click="deleteProduct(product._id)">X</button>
          <button class="btn btn-success" @click="this.$router.push({name: 'Product', params: {id: product._id}})">I</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import productsResources from "@/resources/products";

export default {
  name: "app-products",
  data() {
    return {
      products: [],
      product: {
        title: '',
        price: 0,
        category: 1,
        img: 'default.jpg'
      }
    }
  },
  methods: {
    addProduct(product) {
      console.log(JSON.stringify(product))
      productsResources.addProduct(product).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      });
    },
    deleteProduct(id) {
      productsResources.deleteProduct(id).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      });
    }
  },
  created() {
    productsResources.getAllProducts()
        .then(response => {
          console.log(response)
          this.products = response.data
        }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>