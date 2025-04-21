"use client"

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/auth";
import ProductSlice from "../features/products/product";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: ProductSlice
    }
})