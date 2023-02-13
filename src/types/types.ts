type TasksType = {
    number: number,
    title: string
}

export interface TasksState {
    tasks: TasksType[]
}

export enum TasksActionTypes {
    SORT = 'SORT'
}

interface TasksSortAction {
    type: TasksActionTypes.SORT;
    payload: boolean
}

export type TasksAction = TasksSortAction;
