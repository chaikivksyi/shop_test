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
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    ...mapGetters(['isAuthorization'])
  },
  methods: {
    ...mapActions(['GET_USER'])
  },
  created() {
    this.GET_USER()
  }
}
</script>

