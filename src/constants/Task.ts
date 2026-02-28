
export const Task = { 
    
    Bug             : 'Bug',
    Feature         : 'Feature',
    Documentation   : 'Documentation',
    Research        : 'Research'

} as const;

export type TaskType = typeof Task[keyof typeof Task];   