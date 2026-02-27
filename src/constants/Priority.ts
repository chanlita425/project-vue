
export const Priority = {

    LOW    : 'Low',
    MEDIUM : 'Medium',
    HIGH   : 'High',
    URGENT : 'Urgent'
    
} as const;

export type PriorityType = typeof Priority[keyof typeof Priority];
