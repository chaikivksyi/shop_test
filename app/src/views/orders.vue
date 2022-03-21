<template>
  <div>
    <h1>Categories</h1>
    <form @submit.prevent method="post" class="m-3">
      <div class="form-group mb-3">
        <label for="name">Name</label>
        <input type="text" v-model="category.name" class="form-control" name="name" id="name" placeholder="Enter name">
      </div>
      <button class="btn btn-success" @click="addCategory">Add category</button>
    </form>
    <Table :obj="categories"
           :type_fields="type_fields"
           @delete-product="deleteCategory"
    />
  </div>
</template>

<script>
import categoryResources from "@/resources/category";
// import Loader from "@/components/Loader";
import Table from "@/components/Table";
// import Modal from "@/components/Modal";

export default {
  name: "app-orders",
  data() {
    return {
      categories: [],
      type_fields: [
        {head: 'Name', label: 'name',},
      ],
      category: {
        name: ''
      }
    }
  },
  components: {
    // Loader,
    Table,
    // Modal
  },
  methods: {
    addCategory() {
      categoryResources.addCategory(this.category).then(response => {
        this.categories.push(response.data)
        this.category = {
          name: ''
        }
      }).catch(err => {
        console.log(err)
      });
    },
    deleteCategory(id) {
      categoryResources.deleteCategory(id).then(() => {
        this.categories.find((item, index) => {
          if(item._id === id) {
            this.categories.splice(index, 1)
          }
        })
      }).catch(err => {
        console.log(err)
      });
    }
  },
  created() {
    categoryResources.getAllCategories()
        .then(response => {
          console.log(response)
          setTimeout(() => {
            this.categories = response.data
          }, 500)

        }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>