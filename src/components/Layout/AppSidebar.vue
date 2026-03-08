
<script setup >
    import { useRoute } from 'vue-router'

    defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['close'])
    const route = useRoute()

    const handleClick = () => {
        if (window.innerWidth <= 768) {
            emit('close')
        }
    }
</script>

<template>
    <aside :class="['app-sidebar', { 'app-sidebar-open': isOpen }]">
    
        <div class="app-sidebar_header">
            <span class="app-sidebar_logo">TM</span>
            <h3>Task Management</h3>
        </div>

        <nav class="app-sidebar_nav">
            <RouterLink to="/" class="app-sidebar_link" @click="handleClick" exact>
                <i class="fa-solid fa-house app-sidebar_icon"></i>
                <span>Dashboard</span>
            </RouterLink>

            <RouterLink to="/task" class="app-sidebar_link" @click="handleClick">
                <i class="fa-solid fa-list-check app-sidebar_icon"></i>
                <span>Tasks</span>
            </RouterLink>

            <RouterLink to="/project" class="app-sidebar_link" @click="handleClick">
                <i class="fa-solid fa-folder app-sidebar_icon"></i>
                <span>Project</span>
            </RouterLink>

            <RouterLink to="/#" class="app-sidebar_link" @click="handleClick">
                <i class="fa-solid fa-chart-line app-sidebar_icon"></i>
                <span>Reports</span>
            </RouterLink>

            <RouterLink to="/#" class="app-sidebar_link" @click="handleClick">
                 <i class="fa-solid fa-gear app-sidebar_icon"></i>
                <span>Setting</span>
            </RouterLink>
             <!-- <RouterLink to="/taskForm" class="app-sidebar_link" @click="handleClick">
                 <i class="fa-solid fa-gear app-sidebar_icon"></i>
                <span>Create</span>
            </RouterLink> -->
        </nav>

        <div class="app-sidebar_footer">
            <span> <i class="fa-solid fa-code"> </i></span>
            <span>Create by CHAN LITA</span>
        </div>
    </aside>
</template>