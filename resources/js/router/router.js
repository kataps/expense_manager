"use strict";


import VueRouter from 'vue-router'


/*WEBSITE COMPONENTS*/

import Home from '../components/pages/Home'
import Login from  '../components/pages/Login'
import Error404 from '../components/pages/templates/Error404'

/*CMS COMPONENTS*/

import CmsTemplate from '../components/pages/templates/cms/CmsIndex'
import Dashboard from '../components/pages/dashboard'

const ROUTES = [
    {
        name:'website',
        redirect: 'home',
        path:'/',
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

export default Router