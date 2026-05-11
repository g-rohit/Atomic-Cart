// Here we will be able to combine all slices here

import {configureStore} from '@reduxjs/toolkit'; 

import cartReducer from './slices/cart-slice'

 const store = configureStore({

    reducer: {
        cart: cartReducer
    }
})

export default store;

// this store needs to be imported in the main.jsx of the project