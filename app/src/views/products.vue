<template>
  <div>
    <h1>Products</h1>
    <button class="btn btn-success" @click="showModal = true">Add new product</button>
    <Modal v-if="showModal"
           @closePopup="showModal = false"
           :title="'Add products product'"
           :btn_text="'Add'"
           @successPopup="addProduct"
    >
      <template v-slot:content>
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
        </form>
      </template>
    </Modal>
    <template v-if="!loader">
      <Table :obj="products"
             :type_fields="type_fields"
             @delete-product="deleteProduct"
             @on-redirect="(id) => this.$router.push({name: 'Product', params: {id: id}})"
      />
    </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script>
import productsResources from "@/resources/products";
import Loader from "@/components/Loader";
import Table from "@/components/Table";
import Modal from "@/components/Modal";

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
      },
      type_fields: [
        {head: 'Title', label: 'title',},
        {head: 'Price', label: 'price',},
        {head: 'Category', label: 'category',},
      ],
      loader: true,
      showModal: false
    }
  },
  components: {
    Loader,
    Table,
    Modal
  },
  methods: {
    addProduct() {
      productsResources.addProduct(this.product).then(response => {
        this.products.push(response.data)
        this.showModal = false
        this.product = {
            title: '',
            price: 0,
            category: 1,
            img: 'default.jpg'
        }
      }).catch(err => {
        console.log(err)
      });
    },
    deleteProduct(id) {
      productsResources.deleteProduct(id).then(() => {
        this.products.find((item, index) => {
          if(item._id === id) {
            this.products.splice(index, 1)
          }
        })
      }).catch(err => {
        console.log(err)
      });
    }
  },
  created() {
    productsResources.getAllProducts()
        .then(response => {
          setTimeout(() => {
            this.products = response.data
            this.loader = false;
          }, 500)

        }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>