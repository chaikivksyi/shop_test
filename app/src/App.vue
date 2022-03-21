<template>
  <div>
    <Header v-if="isAuthorization" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    ...mapGetters(['isAuthorization'])
  },
}
</script>

