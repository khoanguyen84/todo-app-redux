export const initState = {
    todoList: [
        // {
        //     id: 1,
        //     name: "Learning ReactJS",
        //     status: 'Todo',
        //     priority: 'High'
        // },
        // {
        //     id: 2,
        //     name: "Learning NextJS",
        //     status: 'Todo',
        //     priority: 'Medium'
        // },
        // {
        //     id: 3,
        //     name: "Learning Piano",
        //     status: 'Completed',
        //     priority: 'Low'
        // },
    ],
    filters: {
        searchText: '',
        status: 'All',
        priorities: []
    },
    loading: false
}

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'todo/fetchTodos': {
            return {
                ...state,
                todoList: action.payload
            }
        }
        case 'todo/setTodoStatus': {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id == action.payload.id ) {
                        return {
                            ...todo,
                            status: action.payload.status
                        }
                    }
                    return todo;
                })
            }
        }
        case 'todo/addtodo': {
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        }
        case 'filter/setSearchText': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchText: action.payload
                }
            }
        }
        case 'filter/setSearchStatus': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }
        case 'filter/setSearchPriorities': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priorities: action.payload
                }
            }
        }
        case 'spinner/toggle': {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default todoReducer;