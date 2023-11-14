const initState = {
    todoList: [
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
    filters: {
        searchText: '',
        status: 'All',
        priorities: []
    },
    loading: false
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todolist/addtodo': {
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        }
        case 'todolist/setTodoStatus': {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(todo.id == action.payload.id){
                        return {
                            ...todo,
                            status: todo.status == 'Todo' ? 'Completed' : 'Todo'
                        }
                    }
                    return todo;
                })
            }
        }
        case 'filters/searchText': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchText: action.payload  
                }
            }
        }
        case 'filters/searchStatus': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload  
                }
            }
        }
        case 'filters/searchPriorities': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priorities: action.payload  
                }
            }
        }
        default: {
            return state
        }
    }
}

export default rootReducer