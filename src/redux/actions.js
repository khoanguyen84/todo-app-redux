export const addTodo = (payload) => {
    return {
        type: 'todolist/addtodo',
        payload
    }
}

export const setTodoStatus = (payload) => {
    return {
        type: 'todolist/setTodoStatus',
        payload
    }
}

export const searchText = (payload) => {
    return {
        type: 'filters/searchText',
        payload
    }
}

export const searchStatus = (payload) => {
    return {
        type: 'filters/searchStatus',
        payload
    }
}

export const searchPriorities = (payload) => {
    return {
        type: 'filters/searchPriorities',
        payload
    }
}