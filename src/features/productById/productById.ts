"use client"

import { createSlice } from '@reduxjs/toolkit'
import { ProdById } from "../../api/getByIdSlice"



interface ProductImage {
    id: number;
    images: string;
}

interface ProductType {
    id: number;
    productName: string;
    price: number;
    images: ProductImage[];
}

const GetByIdSlice = createSlice({
    name: 'getbyid',
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ProdById.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})



export default GetByIdSlice.reducer
