<template>
  <div class="page">
    <div class="bg"></div>

    <book-list-header />

    <section class="controls">
      <book-search-box v-model="query" />
    </section>

    <book-filter-bar
      :categories="categories"
      :active-category="category"
      :active-sort="sort"
      @update:category="onCategory"
      @update:sort="onSort"
    />

    <section class="list">
      <div v-if="displayBooks.length" class="grid">
        <book-card
          v-for="b in displayBooks"
          :key="b.id"
          :book="b"
          :in-shelf="isInShelf(b.id)"
          @toggle-shelf="toggleShelf"
          @open="openBook"
        />
      </div>

      <div v-else class="state">
        <div class="state_title">没有找到匹配的书</div>
        <div class="state_desc">换个关键词，或者把分类切回“全部”试试</div>
      </div>

      <button
        v-if="canLoadMore"
        class="more"
        type="button"
        @click="visibleCount += 10"
      >
        加载更多
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookListHeader from '@/components/booklist/BookListHeader.vue'
import BookSearchBox from '@/components/booklist/BookSearchBox.vue'
import BookFilterBar from '@/components/booklist/BookFilterBar.vue'
import BookCard from '@/components/booklist/BookCard.vue'

export default {
  name: 'BookList',
  components: {
    BookListHeader,
    BookSearchBox,
    BookFilterBar,
    BookCard
  },
  data() {
    return {
      query: '',
      category: '全部',
      sort: 'hot',
      visibleCount: 10
    }
  },
  computed: {
    ...mapState(['books', 'shelf']),
    categories() {
      const set = new Set((this.books || []).map(b => b.category).filter(Boolean))
      return ['全部', ...Array.from(set)]
    },
    filteredBooks() {
      const q = (this.query || '').trim().toLowerCase()
      const c = this.category
      const list = (this.books || []).filter(b => {
        const okCategory = c === '全部' ? true : b.category === c
        if (!okCategory) return false
        if (!q) return true
        const title = String(b.title || '').toLowerCase()
        const author = String(b.author || '').toLowerCase()
        return title.includes(q) || author.includes(q)
      })

      const sort = this.sort
      const sorted = list.slice().sort((a, b) => {
        if (sort === 'new') return Number(b.id) - Number(a.id)
        if (sort === 'rating') return Number(b.rating || 0) - Number(a.rating || 0)
        return Number(b.heat || 0) - Number(a.heat || 0)
      })
      return sorted
    },
    displayBooks() {
      return this.filteredBooks.slice(0, this.visibleCount)
    },
    canLoadMore() {
      return this.filteredBooks.length > this.visibleCount
    }
  },
  methods: {
    isInShelf(bookId) {
      return Boolean(this.shelf && this.shelf[bookId])
    },
    toggleShelf(bookId) {
      this.$store.commit('toggleShelf', bookId)
    },
    openBook(bookId) {
      this.$router.push({ path: `/book/${bookId}` }).catch(() => {})
    },
    onCategory(next) {
      this.category = next
      this.visibleCount = 10
    },
    onSort(next) {
      this.sort = next
      this.visibleCount = 10
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

.controls{
  position: relative;
  padding: 0 44px 18px 44px;
}

.list{
  position: relative;
  padding: 18px 44px 0 44px;
}

.grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.more{
  margin: 18px auto 0 auto;
  display: block;
  width: fit-content;
  height: 42px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid rgba(16,17,20,.22);
  background: rgba(255,255,255,.55);
  color: rgba(16,17,20,.85);
}

.state{
  padding: 48px 10px;
  border: 1px dashed rgba(16,17,20,.18);
  border-radius: 18px;
  background: rgba(255,255,255,.35);
  text-align: center;
}

.state_title{
  font-size: 14px;
  color: #101114;
  font-weight: 700;
}

.state_desc{
  margin-top: 10px;
  color: rgba(16,17,20,.65);
}
</style>
