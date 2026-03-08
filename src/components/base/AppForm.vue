
<script setup>

    const props = defineProps({
        form: Object,
        asignOp: Array,
        priorityOp: Array,
        statusOp: Array,
        taskOp: Array,
        isEdit: Boolean
    })

    const emit = defineEmits(['submit','reset'])

    function handleSubmit(){
        emit('submit')
    }

    function handleReset(){
        emit('reset')
    }

</script>

<template>
    <div class="task-form-wrapper">
        <form class="task-form" @submit.prevent="handleSubmit">

            <div class="form-group">
                <label class="form-label" for="title">Task Title *</label>
                <input  v-model="form.title" class="form-input" type="text" id="title" placeholder="Enter task title">
            </div>

            <div class="form-group">
                <label class="form-label" for="description">Task Description</label>
                <textarea v-model="form.description" class="form-textarea" id="description" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label class="form-label" for="assignedBy">Assigned By *</label>
                <select  class="form-select" v-model="form.assignedBy" id="assignedBy">
                    <option
                        v-for="asign in asignOp"
                        :key="asign"
                        :value="asign"
                        >
                        {{ asign }}
                    </option> 
                </select>
            </div>

            <div class="form-group">
                <label class="form-label" for="priority">Priority</label>
                <select class="form-select" v-model="form.priority" id="priority">
                    <option
                        v-for="p in priorityOp"
                        :key="p"
                        :value="p"
                        >
                        {{ p }}
                    </option>
                </select>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label class="form-label" for="assignDate">Assign Date *</label>
                    <input class="form-input" v-model="form.assignDate" type="date" id="assignDate">
                </div>

                <div class="form-group">
                    <label class="form-label" for="dueDate">Due Date *</label>
                    <input class="form-input" v-model="form.dueDate" type="date" id="dueDate">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label" for="completedDate">Completed Date</label>
                <input class="form-input" v-model="form.completedDate" type="date" id="completedDate">
            </div>

            <div class="form-group">
                <label class="form-label">Status</label>
                <select class="form-select"  v-model="form.status">
                    <option
                        v-for="s in statusOp"
                        :key="s"
                        :value="s"
                        >
                        {{ s }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Project Type</label>

                <div class="checkbox-group">
                    <label class="checkbox-item" v-for="task in taskOp" :key="task">
                        <input type="checkbox" :value="task" v-model="form.task">  {{ task }}
                    </label> 
                </div>
            </div>

            <div class="form-actions">
                <button @click="handleReset" type="reset" class="btn-cancel">Cancel</button>
                <button type="submit" class="btn-submit">{{ isEdit ? "Update Task" : "Add Task" }}</button>
            </div>
        </form>
    </div>
</template>
