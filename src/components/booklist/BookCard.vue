<template>
  <article class="card" @click="$emit('open', book.id)">
    <div class="cover">
      <img :src="book.coverUrl" :alt="book.title" />
    </div>

    <div class="info">
      <div class="top">
        <div class="title ellipsis">{{ book.title }}</div>
        <button class="action" type="button" @click.stop="$emit('toggle-shelf', book.id)">
          {{ inShelf ? '已在书架' : '加入书架' }}
        </button>
      </div>

      <div class="meta">
        <span class="author">{{ book.author }}</span>
        <span class="dot">·</span>
        <span class="category">{{ book.category }}</span>
        <span class="dot">·</span>
        <span class="score">{{ displayScore }}</span>
      </div>

      <div class="tags">
        <span v-for="t in book.tags" :key="t" class="tag">{{ t }}</span>
      </div>

      <p class="desc">{{ book.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    },
    inShelf: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    displayScore() {
      const rating = Number(this.book.rating || 0)
      const heat = Number(this.book.heat || 0)
      if (rating > 0) return `评分 ${rating.toFixed(1)}`
      if (heat > 0) return `热度 ${heat}`
      return '—'
    }
  }
}
</script>

<style scoped lang="scss">
.card{
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid rgba(16,17,20,.12);
  background: rgba(255,255,255,.55);
  box-shadow: 0 12px 34px rgba(16,17,20,.08);
  transition: transform .16s ease, box-shadow .16s ease, background .16s ease;
}

.card:active{
  transform: translateY(1px);
  box-shadow: 0 8px 24px rgba(16,17,20,.08);
}

.cover{
  width: 82px;
  height: 110px;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(16,17,20,.08);
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info{
  flex: 1;
  min-width: 0;
}

.top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.title{
  font-size: 16px;
  font-weight: 700;
  color: #101114;
}

.action{
  height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(178,74,59,.35);
  background: rgba(178,74,59,.10);
  color: #101114;
}

.meta{
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  color: rgba(16,17,20,.62);
  font-size: 12px;
}

.dot{
  opacity: .6;
}

.tags{
  margin-top: 10px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag{
  font-size: 11px;
  padding: 5px 8px;
  border-radius: 999px;
  border: 1px solid rgba(16,17,20,.12);
  background: rgba(246,241,230,.55);
  color: rgba(16,17,20,.75);
}

.desc{
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.45;
  color: rgba(16,17,20,.72);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
