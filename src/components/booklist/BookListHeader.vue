<template>
  <header class="header">
    <div class="brand">
      <div class="title">今日书单</div>
      <div class="sub">搜索、筛选，然后把喜欢的书放进书架</div>
    </div>

    <router-link class="shelf" to="/bookshelf">书架</router-link>
  </header>
</template>

<script>
export default {
  name: 'BookListHeader'
}
</script>

<style scoped lang="scss">
@import '@/assets/css/mixin.scss';

.header{
  padding: 48px 44px 24px 44px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.brand{
  max-width: 72%;
  .title{
    font-size: 26px;
    line-height: 1.1;
    letter-spacing: 1px;
    color: #101114;
    font-weight: 700;
  }
  .sub{
    margin-top: 10px;
    font-size: 12px;
    color: rgba(16,17,20,.68);
  }
}

.shelf{
  border: 1px solid rgba(16,17,20,.35);
  padding: 12px 18px;
  border-radius: 999px;
  color: #101114;
  background: rgba(246,241,230,.35);
}
</style>
