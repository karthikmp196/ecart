import { createSlice } from "@reduxjs/toolkit";

const wishSlice=createSlice({
    name:'wish',
    initialState:[],
    reducers:{
        addToWish:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWish:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyWish:(state)=>{
            return state = []
        }
    }
})
export const{addToWish,removeFromWish,emptyWish}=wishSlice.actions
export default wishSlice.reducer