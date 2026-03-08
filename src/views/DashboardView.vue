
<script setup lang="ts">

    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useEmployee } from '../composables/useEmployee';
    import { useEmployeeForm } from '../composables/useEmployeeForm';  
    import { Status } from '../constants/Status'
     
    const router = useRouter();
    const { employees } = useEmployee();
    const {form} = useEmployeeForm();


    const statusOp = Object.values(Status);
    const today = new Date().toISOString().split('T')[0];
    const fromDate = ref(today);
    const toDate = ref(today);

</script> 

<template>
    <div class="dashboard"> 

        <div class="dashboard-header">
            <div class="dashboard-header_title" > 
                <h3>Dashboard</h3>
                <p class="dashboard-header_date">Thursday, March 5, 2026</p>
            </div>

            <div class="dashboard-header_action">
                <div class="dashboard-date-group">
                    <input type="date" v-model="fromDate" class="dashboard-action_date"/>
                    <span class="dashboard-date-divider">To</span>
                    <input type="date" v-model="toDate" class="dashboard-action_date"/>
                </div>

                <select class="dashboard-header_status" v-model="form.status" >
                    <option v-for="s in statusOp" :key="s" :value="s">
                        {{ s }}
                    </option>
                </select>

            </div>    
        </div>


        <div class="dashboard-content">
            <div class="dashboard-content_card">
                <p class="dashboard-content_card-title">Total Tasks</p>
                <h2>128</h2>
            </div>

            <div class="dashboard-content_card">
                <p class="dashboard-content_card-title">Completed</p>
                <h2>74</h2>
            </div>

            <div class="dashboard-content_card">
                <p class="dashboard-content_card-title">In Progress</p>
                <h2>36</h2>
            </div>

            <div class="dashboard-content_card">
                <p class="dashboard-content_card-title">Cancel</p>
                <h2>18</h2>
            </div>
        </div>

        <div class="dashboard-body">
            <div class="dashboard-body_box">

                 <div class="dashboard-recent_header">
                    <div class="line"></div>
                        <h3>RECENT TASKS</h3>
                    <div class="line"></div>
                </div>

                <div class="dashboard-task_table">
                    <div class="dashboard-task_row dashboard-task_header">
                        <div>TASK</div> 
                        <div>STATUS</div>
                        <div>PRIORITY</div>
                        <div>ASSIGNEE</div>
                        <div>DUE DATE</div>
                    </div>

                     <!-- Rows -->
                    <div class="dashboard-task_row" v-for="task in employees.slice().reverse().slice(0,5)" :key="task.title">
                        <div class="dashboard-task_info">
                            <div class="dashboard-task_title">{{ task.title }}</div>
                            <div class="dashboard-task_sub">{{ task.description}}</div>
                        </div>

                        <div>
                            <span class="dashboard-status" :class="task.status.toLowerCase().replace(' ', '-')">
                                {{ task.status }}
                            </span>
                        </div>

                        <div class="dashboard-priority" :class="task.priority.toLowerCase()">
                            <span class="dot"></span>
                            {{ task.priority }}
                        </div> 

                        <div class="dashboard-avatar">
                            
                                {{ task.assignedBy}}
                            
                        </div>  

                        <div class="dashboard-due_date" :class="{ 'overdue-date': task.status === 'Overdue' }">
                            {{ task.dueDate }}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

