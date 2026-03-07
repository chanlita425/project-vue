
<script setup>
    import { useRoute } from 'vue-router'
</script>

<template>
    <div class="task-form-wrapper">
        <form class="task-form">

            <div class="form-group">
                <label class="form-label" for="title">Task Title *</label>
                <input class="form-input" type="text" id="title" placeholder="Enter task title">
            </div>

            <div class="form-group">
                <label class="form-label" for="description">Task Description</label>
                <textarea class="form-textarea" id="description" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label class="form-label" for="assignedBy">Assigned By *</label>
                <select class="form-select" id="assignedBy">
                    <option>Select employee</option>
                    <option>John</option>
                    <option>David</option>
                    <option>Lisa</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label" for="priority">Priority</label>
                <select class="form-select" id="priority">
                    <option>Select priority</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label class="form-label" for="assignDate">Assign Date *</label>
                    <input class="form-input" type="date" id="assignDate">
                </div>

                <div class="form-group">
                    <label class="form-label" for="dueDate">Due Date *</label>
                    <input class="form-input" type="date" id="dueDate">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label" for="completedDate">Completed Date</label>
                <input class="form-input" type="date" id="completedDate">
            </div>

            <div class="form-group">
                <label class="form-label">Status</label>
                <select class="form-select">
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Project Type</label>

                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox"> Design
                    </label>

                    <label class="checkbox-item">
                        <input type="checkbox"> Development
                    </label>

                    <label class="checkbox-item">
                        <input type="checkbox"> Testing
                    </label>
                </div>
            </div>

            <div class="form-actions">
                <button type="reset" class="btn-cancel">Cancel</button>
                <button type="submit" class="btn-submit">Add Task</button>
            </div>

        </form>
    </div>
</template>
