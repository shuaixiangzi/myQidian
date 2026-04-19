<template>
  <div class="search">
    <input
      class="input"
      type="search"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button v-if="value" class="clear" type="button" @click="$emit('input', '')">清空</button>
  </div>
</template>

<script>
export default {
  name: 'BookSearchBox',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索书名或作者'
    }
  }
}
</script>

<style scoped lang="scss">
.search{
  display: flex;
  gap: 12px;
  align-items: center;
}

.input{
  flex: 1;
  height: 46px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid rgba(16,17,20,.22);
  background: rgba(255,255,255,.55);
  font-size: 13px;
  color: #101114;
}

.clear{
  height: 46px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid rgba(16,17,20,.18);
  background: rgba(246,241,230,.45);
  color: rgba(16,17,20,.8);
}
</style>
