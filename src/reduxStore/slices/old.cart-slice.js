// process: 
// Create Slice
// initialise initial state
// slice--> name, mention initial state, actions
// cart-slice.js
// This file defines a Redux "slice" for the shopping cart using Redux Toolkit.
// A slice = (state + reducers + generated actions) in one place.

import { createSlice } from '@reduxjs/toolkit';

/*
REDUX BASICS (quick mental model)
---------------------------------
1) Store   : The single global object that holds your app state.
2) State   : The actual data (e.g., cart items, total quantity).
3) Action  : A plain object describing "what happened" (type + optional payload).
4) Reducer : A pure function that takes (state, action) and returns new state.
5) Dispatch: The way components send actions to the store.
6) Selector: A function used by components to read state from the store.

Redux Toolkit (RTK) simplifies all of this by:
- letting us write reducers with "mutating" code (internally uses Immer)
- auto‑generating action creators
- reducing boilerplate
*/

// Initial state: shape of the cart data in the store
const initialState = {
  items: [],            // [{ id, title, price, quantity }]
  totalQuantity: 0,     // total number of items in the cart (sum of quantities)
};

// createSlice automatically creates:
// - action creators (cartActions.addItem, etc.)
// - action types ("cart/addItem", ...)
// - a reducer function (exported at the bottom)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // action.payload should be: { id, title, price }
    addItem(state, action) {
      const newItem = action.payload;
      const existing = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;

      if (!existing) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existing.quantity++;
      }
    },

    // action.payload should be: id
    removeItem(state, action) {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (!existing) return;

      state.totalQuantity--;

      if (existing.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existing.quantity--;
      }
    },

    // Clears the entire cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

// Export actions (used in components with dispatch)
export const cartActions = cartSlice.actions;

// Export reducer (used in store configuration)
export default cartSlice.reducer;