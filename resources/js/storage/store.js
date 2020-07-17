import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { reject } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        token: localStorage.getItem('access_token') ?? null,
        refresh_token: localStorage.getItem('refresh_token') ?? null,

    },
    getters:{
        loggedIn(state){
             return state.token != null;
        }
    },
    mutations:{
        setToken(state,token){
                state.token = token
        },
        set_refreshToken(state,reftoken){
                state.refresh_token = reftoken
        }
    }
    ,
    actions:{
             retrieveToken(context,credentials){
                return new Promise( (resolve, reject) => {
                        $.post({
                            url: 'api/login',
                            dataType: 'json',
                            data: {'email': credentials.email,'password': credentials.password},
                            beforeSend: (request) => {
                            
                            },
                         
                            success: function(response){
                                let token = response.access_token  
                                let refreshToken = response.refresh_token;
                                
                                localStorage.setItem('access_token',token)
                                localStorage.setItem('refresh_token',refreshToken);

                                context.commit('setToken',token);
                                context.commit('set_refreshToken', refreshToken)
                                
                                resolve(response)
                            }, 
                            error: function( error){
                                reject(error)
                            }
                    })
                })
            },
            removeToken(context,data){
                 return new Promise((resolve,reject) => {
                     $.post({
                        url: '/api/logout',
                        beforeSend: (request) => {
                            request.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('access_token'));
                        },
                        success: function(response){
                           localStorage.removeItem('access_token')
                           localStorage.removeItem('refresh_token')
                           context.commit('set_refreshToken', null)
                           context.commit('setToken',null);
                           resolve(response)
                        }, 
                        error: function( error){
                         
                            reject(error)
                        }
                     })
                 })
            },
            retrieveExpenseCategories(){
                return new Promise( (resolve,reject) => {
                    $.get({
                        url: '/api/expense_categories',
                        beforeSend:(request)=>{
                              request.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('access_token'));
                        }  ,
                        success: (response) =>{
                            resolve(response)
                        },
                        error: function( error){
                            
                            reject(error)
                        }
                   });
                })
            }
    }
})