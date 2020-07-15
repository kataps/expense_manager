import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        token: localStorage.getItem('access_token') ?? null,

    },
    getters:{
        loggedIn(state){
             return state.token != null;
        }
    },
    mutations:{
        setToken(state,token){
                state.token = token
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

                                localStorage.setItem('access_token',token)
                                context.commit('setToken',token);
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
                        url: 'api/logout',
                        beforeSend: (request) => {
                            request.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('access_token'));
                        },
                        success: function(response){
                        
                            localStorage.removeItem('access_token')
                           context.commit('setToken',null);
                           resolve(response)
                        }, 
                        error: function( error){
                            reject(error)
                        }
                     })
                 })
            }
    }
})