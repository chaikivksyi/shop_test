<template>
  <div class="todo-list">
    <div class="title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: ['title']
}
</script>

<style scoped>

</style>