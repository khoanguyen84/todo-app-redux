import { filterReducer } from "./filterSilce"
import { todoReducer } from "./todoSlice"
import { combineReducers } from "redux"

// const rootReducer = (state = {}, action) => {
//     return {
//         "todoList": todoReducer(state.todoList, action),
//         "filters": filterReducer(state.filters, action)
//     }
// }

const rootReducer = combineReducers({
    "todoList": todoReducer,
    "filters": filterReducer
})

export default rootReducer