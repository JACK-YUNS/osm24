import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home.vue'
import Workbench from '@/pages/workbench/workbench.vue'
import Customer from '@/pages/customer/customer.vue'
import Appointment from '@/pages/appointment/appointment.vue'
import Service from '@/pages/service/service.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/',redirect:'/home/workbench'},
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/home/workbench',
          name:'workbench',
          component:Workbench,
        },
        {
          path:'/home/customer',
          name:'customer',
          component:Customer,
        },
        {
          path:'/home/appointment',
          name:'appointment',
          component:Appointment,
        },{
          path:'/home/service',
          name:'service',
          component:Service,
        }

      ]
    }
  ]
})
