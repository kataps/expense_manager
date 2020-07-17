<template>
    <div>
          <div class="card">
              <div class="card-header">
                   <div class="dflex " >
                        <p>Expense Categories</p>
                        <button class="btn btn-primary">ADD CATEGORY</button>
                   </div>
               </div>
              <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(category, index ) in categories" :key="index" >
                                <td> {{ category.name }}</td>
                                <td> {{ category.createdat }}</td>
                                <td>
                                    <div class="dflex justify-content-between">
                                        <button class="btn btn-primary">Edit</button>
                                        <button class="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
              </div>
          </div>
    </div>
</template>

<script>
    export default {
        data(){
            return  {
                categories: null,
            }
        },
        created(){
            this.$store.dispatch('retrieveExpenseCategories')
            .then (response => {
                this.categories = response
            })

        }
          
    }
</script>

<style lang="scss" scoped>

</style>