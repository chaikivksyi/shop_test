<template>
  <div class="todo-item">
    {{ item.todo }}
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: ['item']
}
</script>

<style scoped>

</style>