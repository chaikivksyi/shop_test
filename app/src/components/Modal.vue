<template>
<!--  @click.self="$emit('closePopup')"-->
  <div class="modal fade show d-flex align-items-center justify-content-center">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modal_title }}</h5>
          <button type="button" class="close" @click="$emit('closePopup')">
            <span >&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="$emit('successPopup')">{{ btn_text }}</button>
          <button type="button" class="btn btn-secondary" @click="$emit('closePopup')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-modal",
  props: {
    modal_title: {
      type: String,
      default: 'Title'
    },
    btn_text: {
      type: String,
      default: 'Ok'
    }
  },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>

</style>