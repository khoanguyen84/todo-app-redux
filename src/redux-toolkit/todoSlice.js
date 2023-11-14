import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        {
            "id": 1,
            "name": "Learning ReactJS",
            "status": "Todo",
            "priority": "High"
        },
        {
            "id": 2,
            "name": "Learning NextJS",
            "status": "Todo",
            "priority": "Medium"
        },
        {
            "id": 3,
            "name": "Learning Piano",
            "status": "Completed",
            "priority": "Low"
        }
    ],
    reducers: {
        addTodo(state, action){
            state.push(action.payload)
        }, // => return action creator with format name/action. Example todo/addTodo
        toggleTodoState(state, action){
            let findTodo = state.find((todo) => todo.id == action.payload.id)
            if(findTodo){
                findTodo.status = findTodo.status == 'Todo' ? 'Completed' : 'Todo'
            }
        }
    }
})