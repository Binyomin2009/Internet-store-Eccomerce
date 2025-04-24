"use client";

import { GetCard } from '@/api/cartSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductInCart {
    id: number;
    name: string;
    quantity: number;
    price: number;
}


interface CartState {
    data: ProductInCart[];
}

const initialState: CartState = {
    data: [],
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetCard.fulfilled, (state, action: PayloadAction<ProductInCart[]>) => {
            state.data = action.payload;
        });
    }
});

export default CartSlice.reducer;
