
import { reactive  } from "vue";
import { useEmployee } from "../composables/useEmployee";   
import { Status, StatusType } from "../constants/Status";
import { Priority, PriorityType } from "../constants/Priority";
import { Asign, AsignType } from "../constants/Asign"; 


export function useEmployeeForm(){
 
    const { addEmployee  } = useEmployee();
    
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
 
    // Reset
    const resetForm = () => {
        Object.assign(form, employeeForm);
    } 

    return { form,  onSubmit, resetForm,   employeeTheader, employeeTbody,  };
}

function today(): string {
    return new Date().toISOString().split('T')[0];
}