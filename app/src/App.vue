<template>
  <div>
    <Header v-if="isAuthorization" />
    <div class="d-flex">
      <left-menu v-if="isAuthorization" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {mapGetters, mapActions} from 'vuex';
import LeftMenu from "@/components/Left-menu";
import authResources from "@/resources/auth";

export default {
  name: 'App',
  components: {
    Header,
    LeftMenu
  },
  computed: {
    ...mapGetters(['isAuthorization'])
  },
  methods: {
    ...mapActions(['SET_USER'])
  },
  created() {
    authResources.userToken()
        .then(() => {this.SET_USER(true)})
        .catch(() => {this.SET_USER(false)})
  }
}
</script>

