
<script setup>

     import { useRouter } from 'vue-router'
     import AppPagination from '../components/base/AppPagination.vue';

</script>
<template>
     <div class="task-container">

          <div class="dashboard-header">
               <div class="dashboard-header_title">
                    <h3>Task</h3>
                    <p class="dashboard-header_date">Thursday, March 5, 2026</p>
               </div>

               <div class="dashboard-header_action">
                    <div class="search-wrapper">
                         <i class="fas fa-search search-icon"></i>
                         <input type="text" placeholder="Search tasks..." class="dashboard-header_search"/>
                    </div>

                    <select class="dashboard-header_status">
                         <option>All Status</option>
                         <option>In Progress</option>
                         <option>Completed</option>
                         <option>On Hold</option>
                    </select>

                    <select class="dashboard-header_sort">
                         <option>Sort by Date</option>
                         <option>Sort by Name</option>
                         <option>Sort by Status</option>
                    </select>

                    <button class="dashboard-header_task-btn">
                         + New Task
                    </button>
               </div>
          </div>

          <div class="task-container_table">
               <div class="task-container_row-header">
                    <div class="task-column">Task Name</div>
                    <div class="task-column">Assignee</div>
                    <div class="task-column">Due Date</div>
                    <div class="task-column">Status</div>
               </div>

               <div class="task-container_row-body">
                    <div class="task-row" v-for="i in 10" :key="i">
                         <div class="task-column">Design Homepage</div>
                         <div class="task-column">Chan Lita</div>
                         <div class="task-column">March 10, 2026</div>
                         <div class="task-column">In Progress</div>
                    </div>
               </div>
          </div>

          <div class="task-container_pagination">
               <AppPagination />
          </div>

     </div>
</template>