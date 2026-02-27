
export const Asign = {
    
    Admin         : 'Admin',
    Team_Lead     : 'Team Lead',
    Manager       : 'Manager',
    HR_Department : 'HR Department'
    
} as const;
 
export type AsignType = (typeof Asign)[keyof typeof Asign];