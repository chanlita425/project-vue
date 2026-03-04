
<script setup >
 
</script>

<template> 
    <div class="sidebar">
        <div class="header">
            <b>Task Management</b>
        </div>
        <nav class="navigation">
            <RouterLink to="/" class="nav-link" exact-active-class="active-link" >
                Dashboard
            </RouterLink>

            <RouterLink to="/employees" class="nav-link" exact-active-class="active-link" >
                Project
            </RouterLink>

            <RouterLink to="/team" class="nav-link" exact-active-class="active-link" >
                Tasks
            </RouterLink>

            <RouterLink to="/reports" class="nav-link" exact-active-class="active-link" >
                Reports
            </RouterLink>

             <RouterLink to="/setting" class="nav-link" exact-active-class="active-link" >
                Setting
            </RouterLink>
        </nav> 
        <div class="footer"> 
            <b>footer</b> 
        </div>
    </div>
</template>