
<template>
  <div class="home">
    <header-top></header-top>
    <footer-top></footer-top>

    <router-view/>
  </div>
</template>

<script>
import headerTop from '@/components/header/head.vue'
import footerTop from '@/components/footer/footer.vue'
export default {
  name: 'home',
  components: {
    headerTop: headerTop,
    footerTop: footerTop
  }
}
</script>
<style scoped lang='scss'>
@import '@/assets/css/mixin.scss';

</style>