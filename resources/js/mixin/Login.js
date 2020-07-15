'use strict'
export default ({
    data(){
        return {
            email:null,
            password:null,
        }
    },
    methods:{
        login() {
            this.$store.dispatch('retrieveToken',{
                 email: this.email,
                 password: this.password,
            })
              .then( response => {
                  this.$router.push({ name: 'home' })
              })
        }
      }
})