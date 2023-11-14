const initValue = {
    searchText: '',
    status: 'All',
    priorities: []
}

export const filterReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'filters/searchText': {
            return {
                ...state,
                searchText: action.payload
            }
        }
        case 'filters/searchStatus': {
            return {
                ...state,
                status: action.payload
            }
        }
        case 'filters/searchPriorities': {
            return {
                ...state,
                priorities: action.payload
            }
        }
        default: {
            return state
        }
    }
}