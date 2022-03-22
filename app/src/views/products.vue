<template>
  <div>
    <template v-if="!loader">
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
             @delete-product="deleteProduct"
             @on-redirect="(id) => this.$router.push({name: 'Product', params: {id: id}})"
      />
      <Pagination :countPages="countPages" :activePagination="activePagination" @changePage="changePage" />
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
import categoryResources from "@/resources/category";
import Note from '@/mixins/note'
import Pagination from "@/components/Pagination";

export default {
  name: "app-products",
  data() {
    return {
      countPages: 1,
      activePagination: 1,
      products: [],
      categories: [],
      product: {
        title: '',
        price: 0,
        category:  '0',
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
    Pagination,
    Loader,
    Table,
    Modal
  },
  methods: {
    addProduct() {
      productsResources.addProduct(this.product).then(() => {
        this.showModal = false
        this.product = {
            title: '',
            price: 0,
            category: '0',
            img: 'default.jpg'
        }
        this.getProducts(() => {
          Note('Product added!!!')
        })
      }).catch(err => {
        console.log(err)
      });
    },
    deleteProduct(id) {
      productsResources.deleteProduct(id).then(() => {
        this.getProducts(() => {
          Note('Product deleted!!!', 'danger')
        })
      }).catch(err => {
        console.log(err)
      });
    },
    getProducts(callback = () => {}) {
      let {page = 1, limit = 5} = this.$route.query;
      productsResources.getAllProducts(page, limit)
          .then(response => {
            setTimeout(() => {
              this.products = response.data.obj
              this.loader = false;
              this.activePagination = Number(page);
              this.countPages = Math.ceil(response.data.count / limit)
              callback();
            }, 500)
          }).catch(error => {
        console.log(error)
      })
    },
    changePage(n) {
      this.$router.push({name: 'Products', query: {page: n, limit: this.$route.query.limit}}).then(() => {
        this.loader = true;
        this.activePagination = n;
        this.getProducts();
      })
    }
  },
  created() {
    this.getProducts();
    categoryResources.getAllCategories().then(response => {
      this.categories = response.data
    })
  }
}
</script>
