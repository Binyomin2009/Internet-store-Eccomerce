"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetSubCateg } from '../../api/subCategSlice';

interface SubCategory {
    id: number;
    name: string;
    categoryId: number;
}

// Тип состояния
interface SubCategState {
    data: SubCategory[];
}

// Начальное состояние
const initialState: SubCategState = {
    data: [],
};

const SubCategSlice = createSlice({
    name: 'subCateg',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(GetSubCateg.fulfilled, (state, action: PayloadAction<{ data: SubCategory[] }>) => {
            state.data = action.payload.data;
        });
    }
});

export default SubCategSlice.reducer;
