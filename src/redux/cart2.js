import { createSlice } from "@reduxjs/toolkit";

const cart2Slice = createSlice({
    name:'cart2',
    initialState:[],
    reducers:{
        addToCart2:(state,action)=>{
            state.push(action.payload)
          },
          removeFromCart2:(state,action)=>{
              return state.filter(item=>item.id!=action.payload)
          },
          emptyCart2:(state)=>{
             return state = []
    }
}
})
export const {addToCart2,removeFromCart2,emptyCart2} =cart2Slice.actions
export default cart2Slice.reducer