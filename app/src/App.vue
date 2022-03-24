<template>
  <div>
    <Header v-if="isAuthorization" />
    <div class="d-flex">
      <left-menu v-if="isAuthorization" />
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {mapGetters} from 'vuex';
import LeftMenu from "@/components/Left-menu";

export default {
  name: 'App',
  components: {
    Header,
    LeftMenu
  },
  computed: {
    ...mapGetters(['isAuthorization'])
  },
}
</script>

