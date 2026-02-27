
import {ref, watch} from 'vue';
import type { Employee } from '../types/Employee';
import { storage } from '../Utils/storage';

const STORAGE_KEY = 'employee'; 


    // state
const employees = ref<Employee[]>(
    storage.get<Employee[]>(STORAGE_KEY) ?? []
);
   
export function useEmployee(){

    // Auto id  
    const nextId = (): number => {
        if (employees.value.length === 0) return 1
        return Math.max(...employees.value.map(e => e.id)) + 1
    }

    //Create 
    const addEmployee =  (employee: Omit<Employee, 'id'>) => {
        employees.value.push({
            id: nextId(),
            ...employee,
            asingDate: employee.asingDate || today(),
            completionDate: employee.completionDate || '',
        });
    };

    //delete
    const deleteEmployee = (id: number) => {
        employees.value = employees.value.filter(e => e.id !== id)
    }


    //update
    const updateEmployee = (emp: Employee) => {
        const index = employees.value.findIndex(e => e.id === emp.id)
        if (index !== -1) {
            employees.value[index] = { ...emp }
        }
    }

 
    // STORAGE SYNC
    watch(employees, (newEmployees) => {
        storage.set(STORAGE_KEY, newEmployees);
    }, { deep: true });

    return {employees, addEmployee, deleteEmployee, updateEmployee }; 
}

function today(): string {
    return new Date().toISOString().split('T')[0];
}

