
<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useEmployee } from '../composables/useEmployee';
    import { useEmployeeForm } from '../composables/useEmployeeForm'; 

    const router = useRouter() 
    const { employees } = useEmployee();
    const { employeeTheader, employeeTbody, onRemove, onEdit,isEdit } = useEmployeeForm();

    const handleUpdate = (emp: any) => {
        onEdit(emp)                        
        router.push({ name: 'FormEmployee' })
    }


    const today = new Date().toISOString().split('T')[0]

    const fromDate = ref(today)
    const toDate = ref(today)

    const tasks = ref([
        {
            title: 'Redesign landing page',
            team: 'Marketing · UI/UX',
            status: 'In Progress',
            priority: 'High',
            assignee: 'JD',
            due: 'Mar 10, 2026'
        },
        {
            title: 'API integration for payments',
            team: 'Engineering · Backend',
            status: 'Completed',
            priority: 'Medium',
            assignee: 'SA',
            due: 'Mar 05, 2026'
        },
        {
            title: 'Q1 performance review',
            team: 'HR Department · Admin',
            status: 'On Hold',
            priority: 'Low',
            assignee: 'MK',
            due: 'Mar 15, 2026'
        },
            {
            title: 'Q1 performance review',
            team: 'HR Department · Admin',
            status: 'On Hold',
            priority: 'Low',
            assignee: 'MK',
            due: 'Mar 15, 2026'
        },
        {
            title: 'Fix checkout bug #1042',
            team: 'Engineering · Frontend',
            status: 'Overdue',
            priority: 'High',
            assignee: 'AL',
            due: 'Mar 01, 2026'
        }
    ])
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

                <select class="dashboard-header_status" >
                    <option>All Status</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>On Hold</option>
                </select>

                <!-- <button class="dashboard-header_task-btn">
                    + New Task
                </button> -->
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
                <p class="dashboard-content_card-title">Trash</p>
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
                    <div class="dashboard-task_row" v-for="task in tasks" :key="task.title">
                        <div class="dashboard-task_info">
                            <div class="dashboard-task_title">{{ task.title }}</div>
                            <div class="dashboard-task_sub">{{ task.team }}</div>
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

                        <div>
                        <div class="dashboard-avatar">
                                {{ task.assignee }}
                        </div> 
                        </div>
                       

                        <div class="dashboard-due_date" :class="{ 'overdue-date': task.status === 'Overdue' }">
                            {{ task.due }}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

