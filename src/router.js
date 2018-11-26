import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Shop from '@/views/Shop';
import AllItem from '@/views/AllItem';
import SingleItem from '@/views/SingleItem';
import Faq from '@/views/Faq';
import CreateOrder from "@/views/CreateOrder";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
      {
      	path: '',
      	name: 'Shop',
      	component: Shop,
      	children: [
      	{
      		path: '',
      		name: 'AllItem',
      		component: AllItem
      	},
      	{
      		path: 'product/:itemId',
      		name: 'SingleItem',
      		component: SingleItem
      	},
      	]
      },
      {
      	path: 'faq',
      	name: 'Faq',
      	component: Faq
      },
      {
      	path: 'createOrder',
      	name: 'CreateOrder',
      	component: CreateOrder
      },
      ]
    },
  ]
})
