<template>
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <!--          <li class="page-item">-->
      <!--            <a class="page-link" href="#">-->
      <!--              <span aria-hidden="true">&laquo;</span>-->
      <!--            </a>-->
      <!--          </li>-->
      <li class="page-item" v-for="page in countPages" :key="page" @click="$emit('changePage', page)" :class="{'active': activePagination === page}">
            <span class="page-link">
              {{ page }}
            </span>
      </li>
      <!--          <li class="page-item">-->
      <!--            <a class="page-link" href="#">-->
      <!--              <span aria-hidden="true">&raquo;</span>-->
      <!--            </a>-->
      <!--          </li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "app-pagination",
  props: {
    countPages: Number,
    activePagination: Number,
  }
}
</script>

<style scoped>

</style>