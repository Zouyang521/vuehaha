import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue'
import Login from '@/views/Login'
import LoginNew from '@/views/login/index'
import Home from '@/views/Home'
import Form from '@/views/Form'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/vue',
    	name:'HelloVue',
    	component:HelloVue
    },
    {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
    {
      path:'/loginnew',
      name:'LoginNew',
      component:LoginNew
    }
    ,
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    },
    {
    	path:'/form',
    	name:'Form',
    	component:Form
    }
  ]
})
