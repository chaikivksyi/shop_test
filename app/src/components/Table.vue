<template>
  <div>
    <table class="table mt-5">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="(field, i) of type_fields" :key="i">
          {{ field.head }}
        </th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) of obj" :key="item._id">
        <th scope="row">{{ ++index }}</th>
        <td v-for="(field, i) of type_fields" :key="i">
          {{ item[field.label] }}
        </td>
        <td>
          <button class="btn btn-outline-danger" @click="this.$emit('delete-product', item._id)">	&#10060;</button>
          <button class="btn btn-outline-primary" @click="this.$emit('on-redirect', item._id)">&#9997;</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "app-table",
  props: {
    obj: Array,
    type_fields: Array
  }
}
</script>
