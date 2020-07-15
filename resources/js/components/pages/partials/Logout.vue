<template>
    <div>
            <button @click="logout">Logout</button>
    </div>
</template>

<script>
    export default {
        methods:{
             logout(){
                this.$store.dispatch('removeToken',{
                })
                .then(response => {
                     this.$router.push({ name: 'home' })
                });
             }
        }
    }
</script>

<style lang="scss" scoped>

</style>