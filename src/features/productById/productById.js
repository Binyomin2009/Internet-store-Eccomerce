"use client"

import { createSlice } from '@reduxjs/toolkit'
import { ProdById } from "../../api/getByIdSlice.js"

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
                console.log(action.payload);
            })
    }
})



export default GetByIdSlice
