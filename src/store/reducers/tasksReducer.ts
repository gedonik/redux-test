import {TasksAction, TasksState} from "../../types/types";

const initialState: TasksState = {
    tasks: [
        {number: 1, title: 'Task 1'},
        {number: 2, title: 'Task 2'},
        {number: 3, title: 'Task 3'},
        {number: 4, title: 'Task 4'},
        {number: 5, title: 'Task 5'},
        {number: 6, title: 'Task 6'},
        {number: 7, title: 'Task 7'},
        {number: 8, title: 'Task 8'},
        {number: 9, title: 'Task 9'},
        {number: 10, title: 'Task 10'},
    ]
}

export const tasksReducer = (state = initialState, action: TasksAction): TasksState => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === true) {
                return {...state, tasks: [...state.tasks].sort((a, b) => a.number - b.number)}
            }
            if (action.payload === false) {
                return {...state, tasks: [...state.tasks].sort((a, b) => b.number - a.number)}
            }
        default:
            return state;
    }
}