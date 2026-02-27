
import { reactive, ref  } from "vue";
import { useEmployee } from "../composables/useEmployee";   
import { Status, StatusType } from "../constants/Status";
import { Priority, PriorityType } from "../constants/Priority";
import { Asign, AsignType } from "../constants/Asign";
import type { Employee } from "../types/Employee";


export function useEmployeeForm(){
 
    const isEdit = ref(false)
    const editingId = ref<number | null>(null)
    const { addEmployee, deleteEmployee, updateEmployee  } = useEmployee();
    
    // Form State
    const employeeForm = reactive({  
        title           : '',
        description     : '',
        priority        : Priority.MEDIUM    as PriorityType,
        status          : Status.IN_PROGRESS as StatusType,
        assignedBy      : Asign.Admin        as AsignType,
        dueDate         : today(),
        asingDate       : today(),
        completionDate  : '--/--/----'
    });

    //header fields
    const employeeTheader = reactive([
        'Title', 
        'Description', 
        'Priority', 
        'Assigned By', 
        'Due Date', 
        'Asign Date', 
        'Completion Date', 
        'Status'
    ]);

    // body fields
    const employeeTbody = reactive([
        'title',
        'description', 
        'priority', 
        'assignedBy', 
        'dueDate', 
        'asingDate', 
        'completionDate', 
        'status'
    ]); 

    // Form  
    const form = reactive({
        ...employeeForm
    });

    // Submit
    const onSubmit = () => {
        addEmployee(form);
        Object.assign(form, employeeForm); 
    } 



    //update
    const onEdit = (employee: Employee) => {
        Object.assign(form, employeeForm)
        isEdit.value = true
        editingId.value = employee.id
    }

    //remove 
    const onRemove = (id: number) => {
        deleteEmployee(id)
    }

    // Reset
    const resetForm = () => {
        Object.assign(form, employeeForm);
    } 

    return { onSubmit, resetForm, onRemove, onEdit, form,  employeeTheader, employeeTbody};
}

function today(): string {
    return new Date().toISOString().split('T')[0];
}