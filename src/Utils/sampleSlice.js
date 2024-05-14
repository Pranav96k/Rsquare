import { createSlice } from "@reduxjs/toolkit";

const sampleSlice=createSlice({
    name:"sample",
    initialState:{
        count:0
    },
    reducers:{
        incCount:(state)=>{
            state.count+=1
        } ,

        decCount:(state)=>{
            state.count-=1
        }
    }
})

export const  {incCount, decCount } =sampleSlice.actions;

export default sampleSlice.reducer;
