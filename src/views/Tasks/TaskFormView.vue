<script setup lang="ts">

    import { useRouter } from 'vue-router';
    import AppForm from "../../components/base/AppForm.vue";
    import { useEmployeeForm } from '../../composables/useEmployeeForm'

    import { Asign } from '../../constants/Asign'
    import { Priority } from '../../constants/Priority'
    import { Status } from '../../constants/Status'
    import { Task } from '../../constants/Task'

    const router = useRouter()

    const asignOp = Object.values(Asign)
    const priorityOp = Object.values(Priority)
    const statusOp = Object.values(Status)
    const taskOp = Object.values(Task)

    const { form, onSubmit, onResetForm, isEdit } = useEmployeeForm()

    function handleSubmit() {
    onSubmit((action: string) => {
        alert(action === 'add'
        ? 'Task added successfully!'
        : 'Task updated successfully!')

        router.push({ name: 'Task' })
    })
    }
</script>

<template>

    <div class="task-container">
        <div class="dashboard-header">
            <div class="dashboard-header_title">
                 <h3>{{ isEdit ? "Update Task" : "Add Task" }}</h3>
                <p class="dashboard-header_date">Thursday, March 5, 2026</p>
            </div>
        </div>
        <div class="task-form" >
            <AppForm
                :form="form"
                :asignOp="asignOp"
                :priorityOp="priorityOp"
                :statusOp="statusOp"
                :taskOp="taskOp"
                :isEdit="isEdit"
                @submit="handleSubmit"
                @reset="onResetForm"
            />
        </div>
    </div>
</template>