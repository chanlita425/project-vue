
import { reactive, ref  } from "vue";
import { useEmployee } from "../composables/useEmployee";   
import { Status, StatusType } from "../constants/Status";
import { Priority, PriorityType } from "../constants/Priority";
import { Asign, AsignType } from "../constants/Asign";
import { Task, TaskType } from "../constants/Task";
import type { Employee } from "../types/Employee"; 

const isEdit = ref(false)
const editingId = ref<number | null>(null)
let _instance: any = null;
const { addEmployee, deleteEmployee, updateEmployee, getEmployeeById  } = useEmployee();

export function useEmployeeForm(){
    if (_instance) return _instance;
    // Form State
    const employeeForm = reactive({  
        title           : '',
        description     : '',
        priority        : Priority.MEDIUM    as PriorityType,
        assignedBy      : Asign.Admin        as AsignType,
        dueDate         : today(),
        asingDate       : today(),
        completionDate  : '--/--/----',
        status          : Status.IN_PROGRESS as StatusType,
        task            : [Task.FEATURE ] as TaskType[]         
    });

    //header fields
    const employeeTheader = reactive([
        'Title', 
        'Description', 
        'Priority', 
        'Assigned By', 
        'Due Date', 
        'Asign Date', 
        'Completion', 
        'Status',
        'Project'
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
        'status',
        'task'
    ]); 

    // Form  
    const form = reactive({
        ...employeeForm
    });

    const onEdit = (employee: Employee) => {
        Object.assign(form, employee)
        isEdit.value = true
        editingId.value = employee.id
    }

    //update && create
    const onSubmit = (afterSubmit?: (action: 'add' | 'update') => void) => {

        let action: 'add' | 'update' = 'add'; 

        if (isEdit.value && editingId.value !== null) {
            const existEmployee = getEmployeeById(editingId.value);
            if (!existEmployee) return;

            const updatedEmployee = { ...existEmployee, ...form };
            updateEmployee(updatedEmployee);

            isEdit.value = false
            editingId.value = null
            action = 'update'; 
        } else {
            addEmployee({ ...form });
            action = 'add';
        }
        Object.assign(form, employeeForm)
        if (afterSubmit) afterSubmit(action);
    }

    //remove 
    const onRemove = (id: number) => {
        deleteEmployee(id)
    }

    // Reset
    const onResetForm = () => {
        Object.assign(form, employeeForm);
    } 
    
    _instance ={ onSubmit, onResetForm, onRemove, onEdit, isEdit, form,  employeeTheader, employeeTbody};
    return  _instance;
}

function today(): string {
    return new Date().toISOString().split('T')[0];
}