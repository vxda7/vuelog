import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import posts from '@/components/posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/posts/',
      name: 'posts',
      component: posts
    }
  ]
})
