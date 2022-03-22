<template>
  <div>
    <template v-if="!loader">
      <h1>Products</h1>
      <button class="btn btn-success" @click="$store.dispatch('PRODUCTS/TOGGLE_POPUP', true)">Add new product</button>
      <Modal v-if="showModal"
              @closePopup="$store.dispatch('PRODUCTS/TOGGLE_POPUP', false)"
             :title="'Add products product'"
             :btn_text="'Add'"
             @successPopup="$store.dispatch('PRODUCTS/ADD', product)"
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
                <option value="0" selected>Select category</option>
                <option v-for="category of categories"
                        :key="category._id"
                        :value="category.name"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </form>
        </template>
      </Modal>
      <Table :obj="products"
             :type_fields="type_fields"
             @delete-product="(id) => $store.dispatch('PRODUCTS/REMOVE', id)"
             @on-redirect="(id) => this.$router.push({name: 'Product', params: {id: id}})"
      />
      <Pagination :countPages="countPages" :activePagination="Number(this.$route.query.page) || 1" @changePage="changePage" />
    </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import Pagination from "@/components/Pagination";
import { mapGetters } from 'vuex';

export default {
  name: "app-products",
  computed: {
    ...mapGetters({
      products: 'PRODUCTS/ALL',
      categories: 'PRODUCTS/CATEGORIES',
      countPages: 'PRODUCTS/COUNT_PAGES',
      product: 'PRODUCTS/PRODUCT',
      showModal: 'PRODUCTS/SHOW_POPUP',
      type_fields: 'PRODUCTS/FIELDS',
      loader: 'PRODUCTS/LOADER',
    })
  },
  components: {
    Pagination,
    Loader,
    Table,
    Modal
  },
  methods: {
    getProducts() {
      this.$store.dispatch('PRODUCTS/GET_ALL')
    },
    changePage(n) {
      this.$router.push({name: 'Products', query: {page: n, limit: this.$route.query.limit}})
        .then(() => {
          this.getProducts();
        })
    }
  },
  created() {
    this.getProducts();
  }
}
</script>
