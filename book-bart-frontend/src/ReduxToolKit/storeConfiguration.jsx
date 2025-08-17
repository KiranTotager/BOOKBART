import { configureStore } from "@reduxjs/toolkit"; 
import booksDetailReducer from "./booksDetailSlice"

const store=configureStore({
    reducer:{
        bookDetail:booksDetailReducer,
    },
});
export default store;