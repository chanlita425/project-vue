
export const Asign = {
    
    Admin         : 'Admin',
    Team_Lead     : 'Leader',
    Manager       : 'Manager',
    HR_Department : 'HR'
    
} as const;
 
export type AsignType = (typeof Asign)[keyof typeof Asign];