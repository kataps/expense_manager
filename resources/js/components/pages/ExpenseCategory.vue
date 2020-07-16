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
                            <tr>
                                <td>Alvin Katapusan</td>
                                <td> 11/13/97</td>
                                <td>
                                    <div class="dflex justify-content-between">
                                        <button class="btn btn-primary">Edit</button>
                                        <button class="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Anglica Sto. Domingo</td>
                                <td>11/13/97</td>
                                <td>
                                    <div class="dflex justify-content-between">
                                        <button class="btn btn-success">Edit</button>
                                        <button class="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Kataps</td>
                                <td>11/13/97</td>
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
        

    }
</script>

<style lang="scss" scoped>

</style>