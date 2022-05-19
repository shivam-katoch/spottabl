import {configureStore} from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice'
import csmReducer from './csmSlice';
export const store=configureStore({
    reducer:{
        Employee:employeeReducer,
        Csm:csmReducer,
    },
});