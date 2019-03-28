	import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueResource from 'vue-resource'
import iview_zc from '@/components/iview_zc';
import iview_wj from '@/components/iview_wj';

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path:'/iview_zc',
			component:iview_zc
		},
		{
			path:'/iview_wj',
			component:iview_wj
		}
  ]
})
