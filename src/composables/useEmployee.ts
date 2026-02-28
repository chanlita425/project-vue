
import {ref, watch} from 'vue';
import type { Employee } from '../types/Employee';
import { storage } from '../Utils/storage';

const STORAGE_KEY = 'employee'; 
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

    //Delete
    const deleteEmployee = (id: number) => {
        employees.value = employees.value.filter(e => e.id !== id)
    }

    //Update
    const updateEmployee = (emp: Employee) => {
        const index = employees.value.findIndex(e => e.id === emp.id)
        if (index !== -1) {
            employees.value[index] = { ...emp }
        }
    }

    //Get employee by id
    function getEmployeeById(id: number): Employee | undefined {
        return employees.value.find(emp => emp.id === id);
    }

    //Storage sync
    watch(employees, (newEmployees) => {
        storage.set(STORAGE_KEY, newEmployees);
    }, { deep: true });

    return {employees, addEmployee, deleteEmployee, updateEmployee, getEmployeeById }; 
}

function today(): string {
    return new Date().toISOString().split('T')[0];
}

