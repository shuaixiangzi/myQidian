
<template>
  <div class="home">
    <footer-top></footer-top>

    <container></container>
  </div>
</template>

<script>
import footerTop from '@/components/footer/footer.vue'
import container from '@/views/container/container.vue'
export default {
  name: 'home',
  components: {
    footerTop: footerTop,
    container: container
  }
}
</script>
<style scoped lang='scss'>
@import '@/assets/css/mixin.scss';

</style>