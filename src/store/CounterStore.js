import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState : {counterval: 0},
    reducers:{
      increment:(state) =>{
        state.counterval++;
      },
      decrement:(state)=>{
        state.counterval--;
      },
  
      add:(state,action)=>{
        state.counterval += Number(action.payload);
      },
      substract:(state,action)=>{
        state.counterval -= Number(action.payload);
      }
    }
  })

  export const counterAction = counterSlice.actions;
  export default counterSlice