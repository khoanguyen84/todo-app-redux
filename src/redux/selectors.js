import { createSelector } from "reselect"

// export const todoListSelector = (state) => {
//     const { todoList, filters: { searchText, status, priorities } } = state
//     if (searchText && !priorities.length) {
//         let newTodoList = todoList.filter((todo) =>
//             todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
//             (status != 'All' ? todo.status == status : true))
//         return newTodoList
//     }

//     if (!searchText && priorities.length) {
//         let newTodoList = todoList.filter((todo) =>
//             priorities.includes(todo.priority) &&
//             (status != 'All' ? todo.status == status : true))
//         return newTodoList
//     }

//     if (searchText && priorities.length) {
//         let newTodoList = todoList.filter((todo) =>
//             priorities.includes(todo.priority) &&
//             todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
//             (status != 'All' ? todo.status == status : true)
//         )
//         return newTodoList
//     }
//     return todoList.filter(todo => status != 'All' ? todo.status == status : true)
// }

export const todoListSelector = (state => state.todoList)
export const searchTextSelector = (state => state.filters.searchText)
export const searchStatusSelector = (state => state.filters.status)
export const searchPrioritiesSelector = (state => state.filters.priorities)

export const remainTodoListSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        if (searchText && !priorities.length) {
            let newTodoList = todoList.filter((todo) =>
                todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                (status != 'All' ? todo.status == status : true))
            return newTodoList
        }

        if (!searchText && priorities.length) {
            let newTodoList = todoList.filter((todo) =>
                priorities.includes(todo.priority) &&
                (status != 'All' ? todo.status == status : true))
            return newTodoList
        }

        if (searchText && priorities.length) {
            let newTodoList = todoList.filter((todo) =>
                priorities.includes(todo.priority) &&
                todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                (status != 'All' ? todo.status == status : true)
            )
            return newTodoList
        }
        return todoList.filter(todo => status != 'All' ? todo.status == status : true)
    }
)
