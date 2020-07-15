<template>
    <div>
        <!-- <span @click="logout">Sigout my account</span> -->
    </div>
</template>

<script>
    export default {
        created (){
            this.$store.dispatch('removeToken',{
           
           })
            .then(response => {
                this.$router.push({ name: 'home' })
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>