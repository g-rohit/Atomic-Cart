// # REDUX BASICS: 
// process: 
// Create Slice
// initialise initial state
// slice--> name, mention initial state, actions
// cart-slice.js
// This file defines a Redux "slice" for the shopping cart using Redux Toolkit.
// A slice = (state + reducers + generated actions) in one place.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
};


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

        addBook(state, action) {
            state.books.push(action.payload)
        },
        deleteBook(state, action) {
            state.books = state.books.filter(book => book.id !== action.payload)
        }
    }
})

console.log(bookSlice);

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;



// Your slice is now properly structured:

// * initial state → correct
// * reducers → correct
// * action exports → correct
// * reducer export → correct
// * immutable update logic → correct

// This is solid Redux Toolkit code for CRUD basics.