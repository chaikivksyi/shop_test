<template>
  <div>
    <template v-if="!loader">
      <button class="brn btn-primary" @click="this.$router.back()">&#8656;Go to back</button>
      <h1>Product</h1>
      <div class="row">
        <div class="col-4">
          <img :src="require('@/assets/img/default.jpg')" style="width: 100%;" alt="">
        </div>
        <div class="col-8">
          <form @submit.prevent method="put" class="m-3">
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
                <option value="0" selected>Select category</option>
                <option v-for="category of categories"
                        :key="category._id"
                        :value="category.name"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <button class="btn btn-success" @click="$store.dispatch('PRODUCTS/UPDATE', product)">Update product</button>
          </form>
        </div>
      </div>
      </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script>
import productsResources from "@/resources/products";
import Loader from "@/components/Loader";
import Note from '@/mixins/note'
import {mapGetters} from "vuex";

export default {
  name: "app-product",
  computed: {
    ...mapGetters({
      product: 'PRODUCTS/PRODUCT',
      categories: 'PRODUCTS/CATEGORIES',
      loader: 'PRODUCTS/LOADER',
    })
  },
  methods: {
    updateProduct() {
      productsResources.updateProduct(this.product._id, this.product).then(response => {
        console.log(response)
        Note('Product updated')
      })
    }
  },
  components: {
    Loader
  },
  created() {
    this.$store.dispatch('PRODUCTS/GET_PRODUCT')
  }
}
</script>

<style scoped>

</style>