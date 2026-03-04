
<script setup lang="ts">

    import { useRouter } from 'vue-router'
    import { useEmployee } from '../../composables/useEmployee';
    import { useEmployeeForm } from '../../composables/useEmployeeForm'; 

    const router = useRouter() 
    const { employees } = useEmployee();
    const { employeeTheader, employeeTbody, onRemove, onEdit,isEdit } = useEmployeeForm();

    const handleUpdate = (emp: any) => {
        onEdit(emp)                        
        router.push({ name: 'FormEmployee' })
    }

</script> 

<template>
    <div class="">
        Dashboard 
    </div>
</template>

