
export const Task = { 
    
    BUG             : 'Bug',
    FEATURE         : 'Feature',
    DOCUMENTATION   : 'Documentation',
    RESEARCH        : 'Research'

} as const;

export type TaskType = typeof Task[keyof typeof Task];   