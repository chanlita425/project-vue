
export const Status = { 
    
    IN_PROGRESS : 'In Progress',
    COMPLETED   : 'Completed',
    ON_HOLD     : 'On Hold',
    CANCELLED   : 'Cancelled'

} as const;

export type StatusType = typeof Status[keyof typeof Status];   