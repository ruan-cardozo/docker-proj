export type TaskListItem = {
    id: number,
    name: string,
    isDone: boolean,
    isEditing: boolean
}

export type TaskList = TaskListItem[];