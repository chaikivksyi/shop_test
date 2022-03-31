<template>
  <div>
    <HeaderMain/>
    <div class="main-content">
      <LeftMenu/>
      <ContentMain/>
    </div>
    <FooterMain/>
  </div>

</template>

<script>

import HeaderMain from "@/components/Header-main";
import FooterMain from "@/components/Footer-main";
import LeftMenu from "@/components/Left-menu-main";
import ContentMain from "@/components/Content-main";
export default {
  name: 'App',
  components: {
    HeaderMain,
    LeftMenu,
    ContentMain,
    FooterMain,

  }
}
</script>

<style>
.main-content{
  display: flex;
}
</style>
