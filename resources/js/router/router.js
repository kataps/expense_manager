"use strict";


import VueRouter from 'vue-router'


/*WEBSITE COMPONENTS*/

import Home from '../components/pages/Home'
import Login from  '../components/pages/Login'
import Error404 from '../components/pages/templates/Error404'

/*CMS COMPONENTS*/

import CmsTemplate from '../components/pages/templates/cms/CmsIndex'
import Dashboard from '../components/pages/dashboard'
import store from '../storage/store';

const ROUTES = [
    {
        name:'website',
        redirect: 'home',
        path:'/',
        meta:{
            requiresAuth:false
        },
        component: {
            name: 'WebsiteTemplate' ,
            render( c) { return c('router-view')}
        },
        children: [
            {
                name: 'home',
                path:'/home',
                component: Home,
            },
            {
                name: 'login',
                path: '/login',
                component: Login,
            }
        ]
    },
    {
            name:'cms',
            path:'/cms',
            redirect: { name: 'dashboard' },
            component:CmsTemplate,
            meta: { 
                requiresAuth:true
            },
            children:[
                {
                     name: 'dashboard',
                     path: 'dashboard',
                     component: Dashboard
                }
            ]
    },
    {
        name: 'error404',
        path: '*',
        component: Error404
    }
]



const Router =  new VueRouter({
     mode: 'history',
     routes: ROUTES,
})
Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.loggedIn) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    }else {
        next() // make sure to always call next()!
    }
    if (to.matched.some(record => !record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.loggedIn) {
            next()
        } else {
            next({
                path: '/cms',
                // query: { redirect: to.fullPath }
             })
        }
      }else{
        next() // make sure to always call next()!
      }
  })
export default Router