<template>
    <div>
    </div>
</template>

<script>
    export default {
        created (){
            this.$store.dispatch('removeToken',{
           })
            .then(response => {
                this.$router.push({ name: 'website' })
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>