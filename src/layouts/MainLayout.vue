  
<script setup lang="ts" > 

  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import AppHeader from '../components/Layout/AppHeader.vue';
  import AppSidebar from '../components/Layout/AppSidebar.vue';

  const isSidebarOpen = ref(false)
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

</script>

<template> 

  <div class="app-layout">
    <AppSidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="app-layout_main">
      <AppHeader @toggleSidebar="toggleSidebar" />
      
      <main class="app-layout_content">
        <div class="app-layout_card">
          <RouterView />
        </div>
      </main>
    </div>

    <div v-if="isSidebarOpen" class="app-layout_overlay" @click="isSidebarOpen = false"></div>
  </div>
</template>