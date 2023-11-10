export const initState = {
    todoList: [
        {
            id: 1,
            name: "Learning ReactJS",
            status: 'Todo',
            priority: 'High'
        },
        {
            id: 2,
            name: "Learning NextJS",
            status: 'Todo',
            priority: 'Medium'
        },
        {
            id: 3,
            name: "Learning Piano",
            status: 'Completed',
            priority: 'Low'
        },
    ],
    filters: {
        searchText: '',
        status: 'All',
        priorities: []
    }
}

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'todo/setTodoStatus': {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo == action.payload ) {
                        todo.status = todo.status == "Todo" ? "Completed" : "Todo"
                        return todo
                    }
                    return todo
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
            console.log(state);
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

export default todoReducer;