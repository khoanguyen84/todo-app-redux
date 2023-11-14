import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { filtersSlice } from "./filtersSlice";

const store = configureStore({
    reducer: {
        todoReducer: todoSlice.reducer,
        filtersReducer: filtersSlice.reducer
    }
})

export default store