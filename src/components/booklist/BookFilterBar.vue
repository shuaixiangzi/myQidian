<template>
  <div class="bar">
    <div class="row">
      <div class="label">分类</div>
      <div class="chips">
        <button
          v-for="c in categories"
          :key="c"
          class="chip"
          :class="{ active: c === activeCategory }"
          type="button"
          @click="$emit('update:category', c)"
        >
          {{ c }}
        </button>
      </div>
    </div>

    <div class="row">
      <div class="label">排序</div>
      <div class="chips">
        <button
          v-for="opt in sortOptions"
          :key="opt.value"
          class="chip"
          :class="{ active: opt.value === activeSort }"
          type="button"
          @click="$emit('update:sort', opt.value)"
        >
          {{ opt.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookFilterBar',
  props: {
    categories: {
      type: Array,
      default: () => ['全部']
    },
    activeCategory: {
      type: String,
      default: '全部'
    },
    sortOptions: {
      type: Array,
      default: () => ([
        { value: 'hot', label: '最热' },
        { value: 'new', label: '最新' },
        { value: 'rating', label: '评分' }
      ])
    },
    activeSort: {
      type: String,
      default: 'hot'
    }
  }
}
</script>

<style scoped lang="scss">
.bar{
  padding: 18px 44px 10px 44px;
  border-top: 1px solid rgba(16,17,20,.08);
  border-bottom: 1px solid rgba(16,17,20,.08);
  background: rgba(246,241,230,.65);
  backdrop-filter: blur(10px);
}

.row{
  display: flex;
  gap: 12px;
  align-items: center;
  &:not(:first-child){
    margin-top: 10px;
  }
}

.label{
  flex: 0 0 40px;
  font-size: 12px;
  color: rgba(16,17,20,.6);
}

.chips{
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 6px;
}

.chip{
  white-space: nowrap;
  height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(16,17,20,.16);
  background: rgba(255,255,255,.55);
  color: rgba(16,17,20,.8);
}

.active{
  border-color: rgba(178,74,59,.55);
  background: rgba(178,74,59,.12);
  color: #101114;
}
</style>
