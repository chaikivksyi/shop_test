<template>
<div class="profile-wrapper">
  <h1>Профиль пользователя</h1>
  <img  src="../assets/images/User-default.png" alt="">
  <div class="profile-information">
    <h4>Name:Leo</h4>
    <h4>Email:Leonid1995@ukr.net</h4>
    <button class="btn">Edit</button>
  </div>
</div>
</template>

<script>
export default {
  name: "User-profile"
}
</script>

<style scoped>
.profile-wrapper{
  margin: 12px;
}
</style>