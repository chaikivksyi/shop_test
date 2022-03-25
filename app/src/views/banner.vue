<template>
  <div>
    <h1>Create banner</h1>
    <div class="row">
      <div class="col-8">
        <div class="d-flex align-items-center">
          <label for="width" class="mx-2">Width: </label>
          <input type="number" id="width" v-model="banner_style.width">
        </div>
        <div class="d-flex align-items-center">
          <label for="height" class="mx-2">Height: </label>
          <input type="number" id="height" v-model="banner_style.height">
        </div>
        <div class="d-flex align-items-center">
          <label for="background" class="mx-2">Background: </label>
          <input type="color" id="background" v-model="banner_style.backgroundColor">
        </div>
      </div>
      <div class="col-4">
        <div :style="{
          width: banner_style.width + 'px',
          height: banner_style.height + 'px',
          backgroundColor: banner_style.backgroundColor,
        }">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-banners",
  data() {
    return {
      banner_style: {
        width: 200,
        height: 400,
        backgroundColor: '#000'
      }
    }
  }
}
</script>

<style scoped>

</style>