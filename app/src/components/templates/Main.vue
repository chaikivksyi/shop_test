<template>
  <div class="main">
    <Table :obj="obj"
           :fields="fields"
           @onDelite="onDelite"
           @on-onRedirect="onRedirect"
    />
  </div>
</template>

<script>
// import Loader from "@/components/Loader";
import Table from "@/components/Table";
// import Modal from "@/components/Modal";

export default {
  name: "app-main",
  components: {
    // Loader,
    Table,
    // Modal,
  },
}
</script>

<style scoped>

</style>