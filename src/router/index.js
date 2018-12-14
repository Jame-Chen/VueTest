import Vue from 'vue'
import Router from 'vue-router'
import MyTest from '@/components/MyTest'
import MyForm from '@/components/MyForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyTest',
      name: 'MyTest',
      component: MyTest
    },
    {
      path: '/MyForm',
      name: 'MyForm',
      component: MyForm
    }
  ]
})
