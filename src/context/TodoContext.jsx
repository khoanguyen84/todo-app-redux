import { createContext, useReducer } from "react";
import todoReducer, { initState } from "../reducer/todoReducer";

export const TodoContext = createContext()

function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initState)
    return (
        <TodoContext.Provider value={[state, dispatch]}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider