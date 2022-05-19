import {createSlice} from "@reduxjs/toolkit";

const initialState={
    csmdata:[],
};

const csmSlice =createSlice({
    name : 'Csm',
    initialState,
    reducers:{
        csmUpdate:(state,action)=>{
            const dataRetrived=action.payload ;
            state.csmdata=dataRetrived;

        }
    }
});
export const {csmUpdate} = csmSlice.actions;
export default csmSlice.reducer;