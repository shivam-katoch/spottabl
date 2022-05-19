import {createSlice} from "@reduxjs/toolkit";
import { data } from "./data";
const initialState={
    employee: data,
    neverChange:data,
};

const employeeSlice =createSlice({
    name : 'Employee',
    initialState,
    reducers :{
        employeeUpdate :(state,action)=>{
            const dataRetrived =action.payload;
            state.employee=dataRetrived;
        }
    }
});
export const { employeeUpdate} = employeeSlice.actions;
export default employeeSlice.reducer