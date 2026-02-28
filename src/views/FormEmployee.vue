 
<script setup lang="ts">
    import { useEmployeeForm } from '../composables/useEmployeeForm';
    import { Asign } from '../constants/Asign';
    import { Priority } from '../constants/Priority';
    import { Status } from '../constants/Status';
    import { Task } from '../constants/Task';
    import { useRouter } from 'vue-router';

    const router = useRouter(); 
    const asignOp    = Object.values(Asign);
    const priorityOp = Object.values(Priority);
    const statusOp   = Object.values(Status);
    const taskOp    = Object.values(Task);
    const { form, onSubmit, onResetForm, isEdit } = useEmployeeForm();

    function handleSubmit() {
        onSubmit((action) => {
            alert(action === 'add' ? 'Task added successfully!' : 'Task updated successfully!');
            router.push({ name: 'HomePage' });   
        });
    }

</script>

<template>
    <div class="dashboard_body bg-info bg-opacity-10  ">
        
        <form @submit.prevent="handleSubmit" class="task_employee was-validated">
            <h3 @click="addNewEmployee" class=" mb-4"> 
                {{ isEdit ? 'Update Task' : 'Add Task ' }}
            </h3>

            <div class="mb-3">
                <label for="title" class="form-label">  Task Title *</label>
                <input v-model="form.title" type="text"  class="form-control" id="title" name="title" placeholder="Enter task title" required>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Task Description</label>
                <textarea v-model="form.description" class="form-control" id="description" name="description" rows="3"></textarea>
            </div>

            <div class="mb-3">
                <label for="employeeId" class="form-label">Assigned By *</label>
                <select v-model="form.assignedBy" class="form-select" id="assignedBy" name="assignedBy" required>
                    <option v-for = 'asignBy in asignOp' :value="asignBy">{{asignBy}}</option> 
                </select>
            </div>
        
            <div class="mb-3">
                <label for="priority" class="form-label">Priority</label>
                <select v-model="form.priority" class="form-select" id="priority" name="priority">
                    <option v-for="priority in priorityOp" :value="priority" :key="priority">{{priority}}</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="assignDate" class="form-label">Assign Date *</label>
                <input v-model="form.asingDate" type="date" class="form-control" id="assignDate" name="assignDate" required>
            </div>
            <div class="mb-3">
                <label for="dueDate" class="form-label">Due Date *</label>
                <input v-model="form.dueDate" type="date" class="form-control" id="dueDate" name="dueDate" required>
            </div> 
            <div class="mb-3">
                <label for="completedDate" class="form-label">Completed Date</label>
                <input v-model="form.completionDate" type="date" class="form-control" id="completedDate" name="completedDate"  >
            </div>

            <div class="mb-3">
                <label class="form-label">Status</label><br>  
                <select v-model="form.status" class="form-select" name="status" id="status">
                    <option v-for="status in statusOp" :value="status">{{status}}</option>
                </select>
            </div> 

            <div class="mb-3">
                <label class="form-label">Task</label><br>
                <div v-for="task in taskOp" :key="task" class="form-check form-check-inline">
                    <input :value="task" v-model="form.task" :id="'task-'+task" class="form-check-input" type="checkbox" >
                    <label class="form-check-label" :for="'task-'+task">{{ task }} </label>
                </div>
            </div>

            <div class="mt-5">
                <button type="button" @click="onResetForm" class=" btn btn-danger me-4 " >Cancel</button>
                <button type="submit" class="btn btn-primary"> {{ isEdit ? 'Update Task' : 'Add Task' }} </button>
            </div>
        </form> 

    </div> 
</template>

