export const addTodo = (payload) => {
    return {
        type: 'todo/addtodo',
        payload
    }
}

export const setTodoStatus = (payload) => {
    return {
        type: 'todo/setTodoStatus',
        payload
    }
}

export const setSearchText = (payload) => {
    return {
        type: 'filter/setSearchText',
        payload
    }
}

export const setSearchStatus = (payload) => {
    return {
        type: 'filter/setSearchStatus',
        payload
    }
}

export const setSearchPriorities = (payload) => {
    return {
        type: 'filter/setSearchPriorities',
        payload
    }
}