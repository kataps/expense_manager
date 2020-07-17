"use strict";
import VueRouter from 'vue-router'
import store from '../storage/store';

/*WEBSITE COMPONENTS*/

import Home from '../components/pages/Home'
import Login from  '../components/pages/Login'
import Logout from '../components/pages/partials/Logout'
import Error404 from '../components/pages/templates/Error404'

/*CMS COMPONENTS*/
import CmsTemplate from '../components/pages/templates/cms/CmsIndex'
import Dashboard from '../components/pages/dashboard'
import ExpenseCategory from '../components/pages/ExpenseCategory'



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
           ,
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            requiresAuth:false
        }
    },
    {
        name:'Logout',
        path:'/logout',
        component: Logout,
        meta:{ 
            requiresAuth:true
        }
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
                     component: Dashboard,
                    // requiresAuth:true
                     
                },
                {
                     name: 'expenseCategory',
                     path:'expenseCategory',
                     component: ExpenseCategory,
                   //  requiresAuth:true
                },
             
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
        
      if (!store.getters.loggedIn) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    }
    else if (to.matched.some(record => !record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next()
        } else {
            next({
               path: '/cms/dashboard',
               // query: { redirect: to.fullPath }
             })
        }
      }else{
        next() // make sure to always call next()!
      }
  })
export default Router