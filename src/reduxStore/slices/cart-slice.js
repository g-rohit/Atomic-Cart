import { createSlice } from '@reduxjs/toolkit';
// const initialState = [];

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};
const USD_TO_INR = 95;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // console.log('Added to cart action: ', action)
            state.items.push(action.payload)
            // console.log(state);
            
        },
        removeFromCart(state, action) {
            // console.log('remove from cart action: ', action)
            // console.log(state.items.filter(item => item.id !== action.payload.id))
            state.items = state.items.filter(item => item.id !== action.payload.id)
            // console.log(state.items);
             
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;