"use client"

import { createSlice } from '@reduxjs/toolkit'
import { GetSubCateg } from '../../api/subCategSlice';

const SubCategSlice = createSlice({
    name: 'subCateg',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetSubCateg.fulfilled, (state, action) => {
                state.data = action.payload.data                
            })
    }
})



export default SubCategSlice.reducer
