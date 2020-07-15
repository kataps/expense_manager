<template>
    <div>
            <h1>Welcome to Home page</h1>
            <p v-if="!loggedIn">Please  Click<router-link :to="{ name: 'login' }">Here</router-link> to login </p>
            <Logout v-if="loggedIn"></Logout>
    </div>  
</template>
<script>
    import Logout from './partials/Logout'
    export default {
        components: { Logout,},
        computed :{
            loggedIn(){
                 return this.$store.getters.loggedIn
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>