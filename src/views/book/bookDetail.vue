<template>
  <div class="page">
    <div class="bg"></div>

    <header class="header">
      <button class="back" type="button" @click="$router.back()">返回</button>
      <div class="title">书籍详情</div>
      <router-link class="toShelf" to="/bookshelf">书架</router-link>
    </header>

    <section v-if="book" class="content">
      <div class="hero">
        <div class="cover">
          <img :src="book.coverUrl" :alt="book.title" />
        </div>
        <div class="info">
          <div class="name">{{ book.title }}</div>
          <div class="meta">{{ book.author }} · {{ book.category }}</div>
          <div class="tags">
            <span v-for="t in book.tags" :key="t" class="tag">{{ t }}</span>
          </div>
          <button class="action" type="button" @click="toggleShelf(book.id)">
            {{ isInShelf(book.id) ? '已在书架' : '加入书架' }}
          </button>
        </div>
      </div>

      <div class="desc">
        {{ book.description }}
      </div>
    </section>

    <section v-else class="state">
      <div class="state_title">未找到这本书</div>
      <router-link class="state_btn" to="/">回到首页</router-link>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BookDetail',
  computed: {
    ...mapState(['books', 'shelf']),
    book() {
      const id = String(this.$route.params.id || '')
      return (this.books || []).find(b => String(b.id) === id) || null
    }
  },
  methods: {
    isInShelf(bookId) {
      return Boolean(this.shelf && this.shelf[String(bookId)])
    },
    toggleShelf(bookId) {
      this.$store.commit('toggleShelf', bookId)
    }
  },
  created() {
    this.$store.dispatch('initBooks')
  }
}
</script>

<style scoped lang="scss">
.page{
  min-height: 100vh;
  padding-bottom: 150px;
  position: relative;
  background: #F6F1E6;
  overflow: hidden;
}

.bg{
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 420px at 10% 0%, rgba(178,74,59,.14), transparent 60%),
    radial-gradient(720px 380px at 92% 16%, rgba(166,215,59,.12), transparent 55%),
    linear-gradient(180deg, rgba(255,255,255,.55), rgba(246,241,230,1));
  pointer-events: none;
}

.header{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
}

.back,
.toShelf{
  border: 1px solid rgba(16,17,20,.22);
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,.55);
  color: rgba(16,17,20,.9);
}

.title{
  font-size: 14px;
  color: rgba(16,17,20,.9);
  font-weight: 700;
}

.content{
  position: relative;
  padding: 10px 24px 0 24px;
}

.hero{
  display: flex;
  gap: 18px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(16,17,20,.12);
  background: rgba(255,255,255,.55);
  box-shadow: 0 12px 34px rgba(16,17,20,.08);
}

.cover{
  width: 110px;
  height: 148px;
  border-radius: 16px;
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

.name{
  font-size: 18px;
  font-weight: 800;
  color: #101114;
}

.meta{
  margin-top: 10px;
  font-size: 12px;
  color: rgba(16,17,20,.65);
}

.tags{
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag{
  font-size: 11px;
  padding: 5px 8px;
  border-radius: 999px;
  border: 1px solid rgba(16,17,20,.12);
  background: rgba(246,241,230,.55);
  color: rgba(16,17,20,.75);
}

.action{
  margin-top: 14px;
  height: 38px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(178,74,59,.35);
  background: rgba(178,74,59,.10);
  color: rgba(16,17,20,.92);
}

.desc{
  margin-top: 16px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(16,17,20,.10);
  background: rgba(255,255,255,.45);
  color: rgba(16,17,20,.72);
  line-height: 1.6;
}

.state{
  position: relative;
  padding: 72px 24px 0 24px;
  text-align: center;
}

.state_title{
  font-size: 14px;
  color: rgba(16,17,20,.9);
  font-weight: 700;
}

.state_btn{
  display: inline-block;
  margin-top: 14px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(16,17,20,.22);
  background: rgba(255,255,255,.55);
  color: rgba(16,17,20,.9);
}
</style>
