import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home.vue'
import Workbench from '@/pages/workbench/workbench.vue'
import Customer from '@/pages/customer/customer.vue'
import Appointment from '@/pages/appointment/appointment.vue'
import Service from '@/pages/service/service.vue'
import Basic from '../pages/customer/basic/basic.vue'
import Bespeak from '../pages/customer/bespeak/bespeak.vue'
import Health from '../pages/customer/health/health.vue'
import Order from '../pages/customer/order/order.vue'
import Serve from '../pages/customer/serve/serve.vue'


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
          children:[
            {path:'/home/customer',redirect:'/home/customer/basic'},
            {
              path:'/home/customer/basic',
              name:"basic",
              component:Basic
            },
            {
              path:'/home/customer/bespeak',
              name:"bespeak",
              component:Bespeak
            },
            {
              path:'/home/customer/health',
              name:"health",
              component:Health
            },
            {
              path:'/home/customer/order',
              name:"order",
              component:Order
            },
            {
              path:'/home/customer/serve',
              name:"serve",
              component:Serve
            },
          ]
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
