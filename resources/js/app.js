/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router/router'
import Index from './components/pages/templates/Index'
import Store from './storage/store'

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
    }
});
window.Vue = require('vue');
Vue.use(VueRouter)
const app = new Vue({
    el: '#app',
    router:Router,
    components: { Index },
    store:Store
}); 
