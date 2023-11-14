import { createSelector } from '@reduxjs/toolkit'

export const todoSelector = (state) => state.todoReducer
export const searchTextSelector = (state) => state.filtersReducer.searchText
export const searchStatusSelector = (state) => state.filtersReducer.status
export const searchPrioritiesSelector = (state) => state.filtersReducer.priorities

export const remainTodoList = createSelector(
    todoSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        if (searchText && !priorities.length) {
            return todoList.filter((todo) =>
                todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                (status != 'All' ? todo.status == status : todo)
            )
        }
        if (!searchText && priorities.length) {
            return todoList.filter((todo) =>
                priorities.includes(todo.priority) &&
                (status != 'All' ? todo.status == status : todo)
            )
        }

        if(!searchText && !priorities.length) {
            return todoList.filter((todo) =>
                todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                priorities.includes(todo.priority) &&
                (status != 'All' ? todo.status == status : todo)
            )
        }
        return status != 'All' ? todoList.filter((todo) => todo.status == status) : todoList
    }
)