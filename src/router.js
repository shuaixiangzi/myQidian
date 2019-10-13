import Vue from 'vue'
import Router from 'vue-router'

// 需要懒加载的路由
/* const home = () => import('./views/home/home.vue'); */
import home from'./views/home/home.vue';
import container from './views/container/container.vue';
import bookrack from './views/book/bookrack.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'container',
          component: container,
          children: [
            {
              path: '',
              name: 'bookrack',
              component: bookrack
            }
          ]
        }
      ]
    }
  ]
})
