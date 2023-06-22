import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../slices/LoginSignupSlice/LoginSignupLogoutSlice"
export const homeStore=configureStore({
    reducer:{
        auth:homeReducer,

    }
})