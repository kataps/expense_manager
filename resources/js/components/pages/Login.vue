<template>
    <div>
        <div class="login-container">
             <div class="card">
                <div class="card-body">
                    <form action="" @submit.prevent="login">
                            <div class="form-group">
                                <label for="">Username</label>
                                <input type="email" class="form-control" v-model="email" required>
                            </div>
                                <div class="form-group">
                                <label for="">Password</label>
                                <input type="text" class="form-control" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-success"> Sign in </button>
                    </form>
                </div>
          </div>
        </div>
    </div>
</template>
<script>

import  Login from '../../mixin/Login.js'
    export default {
        name: "Login",
         mixins:[Login],
    }
</script>

<style lang="scss" scoped>
.login-container{
     max-width:500px;
     margin: 50px auto;
}
</style>