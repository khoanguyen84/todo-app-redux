const initValue = [
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
]

export const todoReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'todolist/addtodo': {
            return [...state, action.payload]
        }
        case 'todolist/setTodoStatus': {
            return state.map(todo => {
                if (todo.id == action.payload.id) {
                    return {
                        ...todo,
                        status: todo.status == 'Todo' ? 'Completed' : 'Todo'
                    }
                }
                return todo;
            })
        }
        default: {
            return state
        }
    }
}