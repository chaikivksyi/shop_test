<template>
  <div>
    <h1>Categories</h1>
    <button class="btn btn-success" @click="showModal = true">Add new user</button>
    <Modal v-if="showModal"
           @closePopup="showModal = false"
           :title="'Add products product'"
           :btn_text="'Add'"
           @successPopup="registerUser"
    >
      <template v-slot:content>
        <form @submit.prevent method="post" class="m-3">
          <div class="form-group mb-3">
            <label for="username">Login</label>
            <input type="text" v-model="user.username" class="form-control" name="username" id="username" placeholder="Enter login">
          </div>
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input type="email" v-model="user.email" class="form-control" name="email" id="email" placeholder="Enter email">
          </div>
          <div class="form-group mb-3">
            <label for="password">Password</label>
            <input type="password" v-model="user.password" class="form-control" name="password" id="password" placeholder="Enter password">
          </div>
          <div class="form-group mb-3">
            <label for="pwd">Password</label>
            <input type="password" v-model="user.pwd" class="form-control" name="pwd" id="pwd" placeholder="Repeat password">
          </div>
          <button @click="registerUser" class="btn btn-primary w-25">Register</button>
        </form>
      </template>
    </Modal>
    <Table :obj="users"
           :type_fields="type_fields"
           @delete-product="deleteUser"
    />
  </div>
</template>

<script>
import usersResources from "@/resources/users";
import Table from "@/components/Table";
import authResources from "@/resources/auth";
import Modal from "@/components/Modal";

export default {
  name: "app-users",
  data() {
    return {
      users: [],
      type_fields: [
        {head: 'Name', label: 'username'},
        {head: 'Email', label: 'email'},
      ],
      user: {
        username: '',
        email: '',
        pwd: '',
        password: ''
      },
      showModal: false
    }
  },
  components: {
    // Loader,
    Table,
    Modal
  },
  methods: {
    registerUser() {
      authResources.registerUser(this.user).then(response => {
        this.users.push(response.data)
        this.user = {
          username: '',
          email: '',
          pwd: '',
          password: ''
        }
        this.showModal = false;
      }).catch(err => {
        console.log(err)
      });
    },
    deleteUser(id) {
      usersResources.deleteUser(id).then(() => {
        this.users.find((item, index) => {
          if(item._id === id) {
            this.users.splice(index, 1)
          }
        })
      }).catch(err => {
        console.log(err)
      });
    }
  },
  created() {
    usersResources.getAllUsers()
        .then(response => {
          this.users = response.data
        }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>