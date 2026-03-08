
<script setup>

    import { useRouter } from 'vue-router'; 
    import AppPagination from '../../components/base/AppPagination.vue';

</script>
<template>
    <div class="task-container">

        <div class="dashboard-header">
            <div class="dashboard-header_title">
                    <h3>Project</h3>
                    <p class="dashboard-header_date">Thursday, March 5, 2026</p>
            </div>

            <div class="dashboard-header_action">
                <div class="search-wrapper">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" placeholder="Search tasks..." class="dashboard-header_search"/>
                </div>

                <select class="dashboard-header_status">
                    <option>All Priority</option>
                    <option>UI/UX</option>
                    <option>Designer</option>
                    <option>On Hold</option>
                </select>

                <select class="dashboard-header_sort">
                    <option>Sort by Date</option>
                    <option>Sort by Name</option>
                    <option>Sort by Status</option>
                </select>

                <button class="dashboard-header_task-btn">
                    + New Project
                </button>
            </div>
        </div>

        <div class="task-container_table">
            <div class="task-container_row-header">
                    <div class="task-column">Id</div>
                    <div class="task-column">project</div>
                    <div class="task-column">priority</div>
                    <div class="task-column">Date</div>
                    <div class="task-column">Action</div>
            </div>

            <div class="task-container_row-body">
                    <div class="task-row" v-for="i in 10" :key="i">
                        <div class="task-column">Q1 performance review</div>
                        <div class="task-column">HR Department · Admin</div>
                        <div class="task-column">Low</div>
                        <div class="task-column">Mar 15, 2026</div>
                        <div class="task-column" >
                            <button class="btn edit"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button class="btn delete"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
            </div>
        </div>

        <div class="task-container_pagination">
            <AppPagination />
        </div>
    </div>
</template>