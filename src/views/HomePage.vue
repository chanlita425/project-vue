
<script setup lang="ts">
 
    import { useEmployee } from '../composables/useEmployee';
    import { useEmployeeForm,  } from '../composables/useEmployeeForm';

    const { employees } = useEmployee();
    const { employeeTheader, employeeTbody } = useEmployeeForm();
   
</script> 
<template>
    <div class="dashboard-body p-3 bg-info bg-opacity-10 border rounded-end px-5">
        <h1 class="mb-5 ">Listing Tasks</h1>

        <table class="table table-success table-striped mb-2 table-hover table-bordered text-center"> 
            <thead>
                <tr class="table table-dark"  >
                    <th>Id</th>
                    <th v-for="header in employeeTheader" :key="header">
                        {{ header }}
                    </th>  
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in employees" :key="emp.id"> 
                    <td>{{ emp.id }}</td>
                    <td v-for="field in employeeTbody" :key="field">
                        {{ emp[field as keyof typeof emp] }}
                    </td>
                    <td>  
                        <button type="submit" class="btn btn-sm btn-primary me-2 ">Update</button>
                        <button class="btn btn-sm btn-danger">Delete</button> 
                    </td>
                </tr> 
            </tbody>    
        </table>
    </div> 
</template>

