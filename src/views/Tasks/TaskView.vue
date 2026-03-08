
<script setup lang="ts">

     import { useRouter } from 'vue-router'
     import AppPagination from '../../components/base/AppPagination.vue'  
     import { useEmployee } from '../../composables/useEmployee'; 
     import { useEmployeeForm } from '../../composables/useEmployeeForm'
     import { Status } from '../../constants/Status'
     
     const router = useRouter() 
     const { employees } = useEmployee();
     const {form, employeeTheader, employeeTbody, onRemove, onEdit } = useEmployeeForm();
     const statusOp = Object.values(Status)


     const AddTAsk = ( ) => {
          router.push({ name: 'TaskForm' })
     }
     const handleUpdate = (emp: any) => {
          onEdit(emp)                        
          router.push({ name: 'TaskForm' })
     }
</script>
<template>
     <div class="task-container">

          <div class="dashboard-header">
               <div class="dashboard-header_title">
                    <h3>Task</h3>
                    <p class="dashboard-header_date">Thursday, March 5, 2026</p>
               </div>

               <div class="dashboard-header_action">
                    <div class="search-wrapper">
                         <i class="fas fa-search search-icon"></i>
                         <input type="text" placeholder="Search tasks..." class="dashboard-header_search"/>
                    </div>

                    <select class="dashboard-header_status" v-model="form.status">
                         <option v-for="s in statusOp" :key="s" :value="s">
                              {{ s }}
                         </option>
                    </select>

                    <select class="dashboard-header_sort">
                         <option>Sort by Date</option>
                         <option>Sort by Name</option>
                         <option>Sort by Status</option>
                    </select> 

                    <button @click="AddTAsk" class="dashboard-header_task-btn">
                         + New Task
                    </button>
               </div>
          </div>

          <div class="task-container_table">
               <div class="task-container_row-header">
                     <div class="task-column"  ">
                         id
                    </div> 
                    <div class="task-column" v-for="header in employeeTheader" :key="header">
                         {{header}}
                    </div> 
                     <div class="task-column"  >
                         Action
                    </div> 
               </div>

               <div class="task-container_row-body">
                    <div class="task-row" v-for="emp in employees" :key="emp.id">
                         <div class="task-column">{{ emp.id }}</div>
                         <div class="task-column" v-for="field in employeeTbody" :key="emp.id + field">
                              {{ Array.isArray(emp[field as keyof typeof emp]) 
                                   ? (emp[field as keyof typeof emp] as string[]).join(', ') 
                                   : emp[field as keyof typeof emp] 
                              }}
                         </div> 
                         <div class="task-column" >
                              <button  @click="handleUpdate(emp)" class="btn edit"><i class="fa-regular fa-pen-to-square"></i></button>
                              <button  @click="onRemove(emp.id)" class="btn delete"><i class="fa-regular fa-trash-can"></i></button>
                         </div>
                    </div>
               </div>
          </div>

          <div class="task-container_pagination">
               <AppPagination /> 
          </div>
     </div>
</template>