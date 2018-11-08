import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/view/Counter'
import Todo from '@/view/Todo/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
