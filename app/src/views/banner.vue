<template>
  <div>
    <h1>Create banner</h1>
    <div class="row">
      <div class="col-4">
        <div class="my-4">
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
        <div >
          <h3>Elements</h3>
          <ul class="d-block list-unstyled">
            <li class="element" data-element="text" @click="addElement">
              <div class="label">Text</div>
              <span>Text</span>
            </li>
            <li class="element image" data-element="image" @click="addElement">
              <div class="label">Image</div>
              <img src="@/assets/img/default.jpg" alt="" class="w-100">
            </li>
            <li class="element" data-element="link" @click="addElement">
              <div class="label">Link</div>
              <a href="#">Link</a>
            </li>
            <li class="element" data-element="list" @click="addElement">
              <div class="label">List item</div>
              <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </li>
            <li class="element" data-element="button" @click="addElement">
              <div class="label">Button</div>
              <button>Button</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div :style="{
          width: banner_style.width + 'px',
          height: banner_style.height + 'px',
          backgroundColor: banner_style.backgroundColor,
        }" ref="banner">

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
        width: 400,
        height: 600,
        backgroundColor: '#ccc0c0'
      }
    }
  },
  methods: {
    addElement(e) {
      const el = e.target.closest('.element').lastElementChild.cloneNode(true)
      el.classList.add('elem')
      this.elements.push(e.target.getAttribute('data-element'))
      this.$refs.banner.appendChild(el)
      }
  }
}
</script>

<style scoped>
  .element {
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid #dddddd;
    cursor: pointer;
    position: relative;
  }

  .label {
    font-size: 12px;
    position: absolute;
    top: -10px;
    left: 0;
    background: #fff;
    padding: 0 5px;
  }

  .elem {
    display: block;
  }

</style>