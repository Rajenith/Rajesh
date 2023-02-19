import { createSlice } from "@reduxjs/toolkit";
export const counterSlice=createSlice({
    name:'rate',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
    }
})
export const{increment}=counterSlice.actions;
export const selectCount=(state)=>state.rate.value;
export default counterSlice.reducer