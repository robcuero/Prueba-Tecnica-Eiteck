import{configureStore}from "@reduxjs/toolkit";
import { formSlice } from "./slices/form/formSlice";
import { listsSlice } from "./slices/lists";


export const store=configureStore({
    reducer:{
     lists:listsSlice.reducer,
     form:formSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
