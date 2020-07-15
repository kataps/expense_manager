
<template>
  <div>
      
      <div class="wrapper">
        <!-- Navbar -->
          <Navbar/>
        <!-- ./ Navbar -->

        <!-- Main Sidebar Container -->
            <MainSideBar/>
        <!--  ./Main Sidebar Container -->

        <!-- Content Wrapper. Contains page content -->
          <ContentWrapper/>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
           <ControlSideBar/>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
           <Footer/>
         <!-- /.Mai Footer -->
      </div>
  </div>
</template>

<script>

import Navbar from "./navbar"
import MainSideBar from './SideBar'
import  ContentWrapper from './ContentWrapper'
import ControlSideBar from './controlSideBar'
import Footer from './Footer'
export default {
    components : {
          Navbar,
          MainSideBar,
          ContentWrapper,
          ControlSideBar,
          Footer
    }
}
</script>

<style lang="scss" scoped>



</style>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

