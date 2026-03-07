<script setup>

    import { useRouter } from 'vue-router';
    import AppForm from "../../components/base/AppForm.vue";
    import { useEmployee } from '../../composables/useEmployee';
    import { useEmployeeForm } from '../../composables/useEmployeeForm'; 

    const { employees } = useEmployee();
    const { employeeTheader, employeeTbody, onRemove, onEdit } = useEmployeeForm();
</script>

<template>

    <div class="task-container">
        <div class="dashboard-header">
            <div class="dashboard-header_title">
                <h3>Add Task</h3>
                <p class="dashboard-header_date">Thursday, March 5, 2026</p>
            </div>
        </div>
        <div class="task-form">
            <AppForm />
        </div>
    </div>
</template>