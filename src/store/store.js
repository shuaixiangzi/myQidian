import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const STORAGE_KEY = 'book_shelf_v1';

function getStorage() {
    if (typeof window === 'undefined') return null;
    return window.localStorage || null;
}

function loadShelf() {
    const storage = getStorage();
    if (!storage) return {};
    try {
        const raw = storage.getItem(STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return parsed.reduce((acc, id) => {
                acc[String(id)] = true;
                return acc;
            }, {});
        }
        if (parsed && typeof parsed === 'object') return parsed;
        return {};
    } catch (e) {
        return {};
    }
}

function saveShelf(shelf) {
    const storage = getStorage();
    if (!storage) return;
    try {
        const ids = Object.keys(shelf || {}).filter(id => shelf[id]);
        storage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
        return;
    }
}

const defaultCover = require('@/assets/img/book.png');

const mockBooks = [
    {
        id: '101',
        title: '雪中悍刀行',
        author: '烽火戏诸侯',
        coverUrl: defaultCover,
        category: '玄幻',
        tags: ['群像', '热血', '江湖'],
        description: '庙堂江湖两相逢，少年执剑入世，走出自己的天下。',
        heat: 9821,
        rating: 9.1
    },
    {
        id: '102',
        title: '三体',
        author: '刘慈欣',
        coverUrl: defaultCover,
        category: '科幻',
        tags: ['硬科幻', '史诗', '宇宙'],
        description: '从地球文明到宇宙尺度的黑暗森林，命运在沉默中改写。',
        heat: 12034,
        rating: 9.6
    },
    {
        id: '103',
        title: '庆余年',
        author: '猫腻',
        coverUrl: defaultCover,
        category: '历史',
        tags: ['权谋', '轻喜', '成长'],
        description: '一段写在史书缝隙里的传奇，少年在棋局中寻找自己的位置。',
        heat: 8433,
        rating: 8.9
    },
    {
        id: '104',
        title: '大奉打更人',
        author: '卖报小郎君',
        coverUrl: defaultCover,
        category: '仙侠',
        tags: ['破案', '爽文', '体系'],
        description: '一名现代人穿越大奉王朝，靠逻辑与胆识打更破局。',
        heat: 11220,
        rating: 8.7
    },
    {
        id: '105',
        title: '我有一座恐怖屋',
        author: '我会修空调',
        coverUrl: defaultCover,
        category: '悬疑',
        tags: ['惊悚', '副本', '反转'],
        description: '午夜游乐场开门营业，最吓人的从来不是鬼，而是人心。',
        heat: 6790,
        rating: 8.5
    },
    {
        id: '106',
        title: '赘婿',
        author: '愤怒的香蕉',
        coverUrl: defaultCover,
        category: '都市',
        tags: ['商战', '群像', '反套路'],
        description: '带着现代思维入局，刀与算盘并行，改变一城一国。',
        heat: 7344,
        rating: 8.4
    },
    {
        id: '107',
        title: '诡秘之主',
        author: '爱潜水的乌贼',
        coverUrl: defaultCover,
        category: '奇幻',
        tags: ['蒸汽', '序列', '克苏鲁'],
        description: '雾都与序列之上，真相像潮水一样涌来，理智在边缘摇晃。',
        heat: 14320,
        rating: 9.4
    },
    {
        id: '108',
        title: '凡人修仙传',
        author: '忘语',
        coverUrl: defaultCover,
        category: '仙侠',
        tags: ['凡人流', '修炼', '长篇'],
        description: '资质平平，也要一步一步向上走；仙途漫漫，唯有自渡。',
        heat: 9102,
        rating: 8.8
    },
    {
        id: '109',
        title: '黄金时代',
        author: '王小波',
        coverUrl: defaultCover,
        category: '文学',
        tags: ['讽刺', '自由', '短篇'],
        description: '在荒诞与真实之间，人要如何把自己活成一个人。',
        heat: 4021,
        rating: 9.0
    },
    {
        id: '110',
        title: '长安的荔枝',
        author: '马伯庸',
        coverUrl: defaultCover,
        category: '历史',
        tags: ['唐风', '职场', '小人物'],
        description: '一颗荔枝，牵动千里驿路；一次差事，映出盛唐的真实纹理。',
        heat: 5120,
        rating: 8.6
    },
    {
        id: '111',
        title: '活着',
        author: '余华',
        coverUrl: defaultCover,
        category: '文学',
        tags: ['人生', '命运', '现实'],
        description: '苦难像河流一样穿过一生，人却仍要把日子过下去。',
        heat: 11800,
        rating: 9.3
    },
    {
        id: '112',
        title: '平凡的世界',
        author: '路遥',
        coverUrl: defaultCover,
        category: '文学',
        tags: ['奋斗', '年代', '群像'],
        description: '在尘土与星光之间，每个人都在寻找属于自己的路。',
        heat: 9800,
        rating: 9.2
    }
];

const store = new Vuex.Store({
    state: {
        books: [],
        shelf: loadShelf()
    },
    mutations: {
        setBooks(state, books) {
            state.books = Array.isArray(books) ? books : [];
        },
        toggleShelf(state, bookId) {
            const id = String(bookId);
            const next = { ...(state.shelf || {}) };
            next[id] = !next[id];
            if (!next[id]) delete next[id];
            state.shelf = next;
            saveShelf(next);
        }
    },
    actions: {
        initBooks({ state, commit }) {
            if (state.books && state.books.length) return;
            commit('setBooks', mockBooks);
        }
    }
})

export default store;
