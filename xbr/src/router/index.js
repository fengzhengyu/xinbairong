import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Index';   //主页
import Intro from 'page/Intro';  //公司介绍
import Project from 'page/Project';  //项目介绍
import  News from 'page/News'; //新闻动态
import Detail from 'page/NewsDetail';//新闻详情
import Garden from 'page/Garden'; //园区展示
import Shop from 'page/Shop'; //门店展示
import Contact from 'page/Contact'; // 联系方式

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
      
        keepAlive: true ,
        isUseCache: false
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component:Detail
    },
    {
      path: '/garden',
      name: 'garden',
      component: Garden
    },
    {
      path: '/shop',
      name: 'shop',
      component:Shop
    },
    {
      path: '/contact',
      name: 'contact',
      component:Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {

    if (savedPosition) {
    
      return savedPosition
    } else {
      if (from.meta.keepAlive) {  
        from.meta.savedPosition = document.body.scrollTop;  
       }  
       return { x: 0, y: to.meta.savedPosition || 0 } 
     
    }
  }
})
