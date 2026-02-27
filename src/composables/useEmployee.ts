
import {ref, watch} from 'vue';
import type { Employee } from '../types/Employee';
import { storage } from '../Utils/storage';

const STORAGE_KEY = 'employee'; 
export function useEmployee(){

    // state
    const employees = ref<Employee[]>(
        storage.get<Employee[]>(STORAGE_KEY) ?? []
    );

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
 
    // STORAGE SYNC
    watch(employees, (newEmployees) => {
        storage.set(STORAGE_KEY, newEmployees);
    }, { deep: true });
     
    return {employees, addEmployee, }; 
}

function today(): string {
    return new Date().toISOString().split('T')[0];
}

