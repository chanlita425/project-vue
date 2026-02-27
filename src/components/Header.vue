<script setup lang="ts">

</script>
 
<template>
  <nav class="dashboard_header navbar navbar-dark justify-content-center bg-dark px-5 fixed  ">
    <span class="navbar-brand mb-4 pt-4 ">
       <h1>Employee Task </h1>
    </span>
    <nav class="dashboard_menu navbar navbar-light px-3 bg-dark ">
        <div>
            <router-link to="/HomePage" class="btn btn-outline-info me-2 text-light">List Tasks</router-link>
            <router-link to="/FormEmployee" class="btn btn-outline-success text-light">Add Task</router-link>
        </div>
    </nav>
  </nav>
  
</template> 