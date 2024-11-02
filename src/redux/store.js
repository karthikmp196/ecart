import { configureStore } from "@reduxjs/toolkit";
import cart2Slice from './cart2'
import wishSlice from './wish'

export const store=configureStore({
    reducer:{
       cart: cart2Slice,
       wish:wishSlice
    }
})