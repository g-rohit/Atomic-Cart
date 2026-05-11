import { createSlice } from '@reduxjs/toolkit';
// const initialState = [];

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload)
        },
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;