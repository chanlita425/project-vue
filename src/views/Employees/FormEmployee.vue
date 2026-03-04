 
<script setup lang="ts">
    import { useEmployeeForm } from '../../composables/useEmployeeForm';
    import { Asign } from '../../constants/Asign';
    import { Priority } from '../../constants/Priority';
    import { Status } from '../../constants/Status';
    import { Task } from '../../constants/Task';
    import { useRouter } from 'vue-router';

    const router = useRouter(); 
    const asignOp    = Object.values(Asign);
    const priorityOp = Object.values(Priority);
    const statusOp   = Object.values(Status);
    const taskOp    = Object.values(Task);
    const { form, onSubmit, onResetForm, isEdit } = useEmployeeForm();

    function handleSubmit() {
        onSubmit((action: string) => {
            alert(action === 'add' ? 'Task added successfully!' : 'Task updated successfully!');
            router.push({ name: 'HomePage' });   
        });
    }

</script>

<template>
   
</template>

