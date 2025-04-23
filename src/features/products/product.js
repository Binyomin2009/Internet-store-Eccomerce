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
                state.data = action.payload.data
            })
    }
})



export default ProductSlice.reducer
