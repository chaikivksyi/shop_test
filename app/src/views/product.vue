<template>
  <div>
    <template v-if="!loader">
      <button class="brn btn-primary" @click="this.$router.back()">&#8656;Go to back</button>
      <h1>Product</h1>
      <form @submit.prevent method="put" class="m-3" enctype="multipart/form-data">
        <div class="row">
          <div class="col-4">
            <img :src="`http://localhost:5006/uploads/${product.img}`" style="width: 100%;" alt="">
          </div>
          <div class="col-8">
              <div class="form-group mb-3">
                <label for="title">Title</label>
                <input type="text" v-model="product.title" class="form-control" name="title" id="title" placeholder="Enter title">
              </div>
              <div class="form-group mb-3">
                <label for="price">Price</label>
                <input type="number" v-model="product.price" class="form-control" name="price" id="price" placeholder="Enter price">
              </div>
            <div class="form-group mb-3">
              <label for="img">Image</label>
              <input type="file" @change="onChangeFile" class="form-control" name="img" id="img" placeholder="Select image">
            </div>
              <div class="form-group mb-3">
                <label for="category">Category</label>
                <select v-model="product.category" id="category" name="category" class="form-select">
                  <option value="all" selected>Select category</option>
                  <option v-for="category of categories"
                          :key="category._id"
                          :value="category.name"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <button class="btn btn-success" @click="updateProduct">Update product</button>
          </div>
        </div>
      </form>
      </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
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
      let fd = null
      if(this.selectedFile) {
        fd = new FormData();
        fd.append('img', this.selectedFile, this.selectedFile.name)
        this.product.img = this.selectedFile.name
      }
      this.$store.dispatch('PRODUCTS/UPDATE', {
        product: this.product,
        file: fd
      })
    },
    onChangeFile(e) {
      this.selectedFile = e.target.files[0]
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