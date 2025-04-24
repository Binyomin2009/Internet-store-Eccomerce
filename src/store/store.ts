"use client"

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/auth";
import ProductSlice from "../features/products/product";
import SubCategSlice from "../features/subCategories/subCategories"
import GetByIdSlice from "../features/productById/productById";
import CartSlice from "../features/cart/cart";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: ProductSlice,
        subCateg: SubCategSlice,
        getbyid: GetByIdSlice,
        cart: CartSlice
    }
})