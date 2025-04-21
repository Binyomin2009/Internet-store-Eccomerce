"use client"

import { createSlice } from '@reduxjs/toolkit'
import { getProd } from '../../api/productSlice'

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProd.fulfilled, (state, action) => {
                console.log(action.payload);
                
                state.data = action.payload.data
                console.log(state.data);

            })
    }
})



export default ProductSlice.reducer
