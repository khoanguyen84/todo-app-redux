import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        setSearchText(state, action){
            state.searchText = action.payload
        },
        setSearchStatus(state, action){
            state.status = action.payload
        },
        setSearchPriorities(state, action){
            state.priorities = action.payload
        }
    }
})