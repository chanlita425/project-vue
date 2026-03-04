  
<script setup lang="ts" > 
  import { RouterView } from 'vue-router';
  import AppHeader from '../components/Layout/AppHeader.vue'
  import AppSidebar from '../components/Layout/AppSidebar.vue';

</script>

<template> 

  <div class="main-layout">

    <!-- sidebar -->
    <AppSidebar /> 

    <!-- main content -->
    <div class="main-content">
      <div class="head-menu">
        <AppHeader/>
      </div>
      
      <div class="page-content">
        <router-view />
      </div>
    </div>

  </div>
</template>