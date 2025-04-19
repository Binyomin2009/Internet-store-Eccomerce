"use client"

import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice  from "../features/auth/auth";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
    }
})