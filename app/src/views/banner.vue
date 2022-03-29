<template>
  <div>
    <h1>Create banner</h1>
    <div class="row">
      <div class="col-8">
        <div class="p-5">
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
        <div class="p-5">
          <div class="d-flex align-items-center">
            <button class="btn btn-primary" @click="showTextField">Text</button>
            <button class="btn btn-success" @click="showImageField">Image</button>
          </div>
          <div class="d-block">
            <div class="d-flex align-items-center" v-if="text_element.show">
              <label for="text" class="mx-2">Text: </label>
              <input type="text" id="text">
              <button class="btn btn-info">Add text</button>
            </div>
            <div class="d-flex align-items-center" v-if="image_element.show">
              <label for="img" class="mx-2">Image: </label>
              <input type="file" id="img">
            </div>
          </div>
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
      elements: [],
      text_element: {
        show: false,
        text: '',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
      },
      image_element: {
        show: false,
        text: '',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
      },
      banner_style: {
        width: 200,
        height: 400,
        backgroundColor: '#000'
      }
    }
  },
  methods: {
    showTextField() {
      this.image_element.show = false;
      this.text_element.show = true;
    },
    showImageField() {
      this.image_element.show = true;
      this.text_element.show = false;
    }
  }
}
</script>

<style scoped>

</style>