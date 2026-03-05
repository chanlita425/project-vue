
<script setup>
  defineEmits(['toggleSidebar'])
</script>

<template>
  <header class="app-header">
    
    <div class="app-header_left">
      <button class="app-header_menu-btn" @click="$emit('toggleSidebar')">
        <span><i class="fa-solid fa-bars"></i></span>
      </button>

      <div>
        <h1 class="app-header_title">Task Management</h1>
        <p class="app-header_subtitle">Manage your tasks efficiently</p>
      </div>
    </div>

    <div class="app-header_right">
      <button class="app-header_notification">
        <span><i class="fa-solid fa-bell"></i></span>
        <span class="app-header_notification-dot"></span>
      </button>

      <div class="app-header_avatar">CL</div>
    </div>
  </header>
</template>