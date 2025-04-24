import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

interface AddToCartResponse {
    success: boolean;
    message: string;
}

export const AddToCardSlice = createAsyncThunk<AddToCartResponse, number | string>(
    "cart/AddToCardSlice",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post<AddToCartResponse>(`/Cart/add-product-to-cart?id=${id}`);
            return data;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue("Ошибка при загрузке данных");
        }
    }
);

export interface ProductInCart {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export const GetCard = createAsyncThunk<ProductInCart[]>(
    "cart/GetCard",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get<{ data: { productsInCart: ProductInCart[] }[] }>(
                "/Cart/get-products-from-cart"
            );
            return data.data[0].productsInCart;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue("Ошибка при загрузке данных");
        }
    }
);

export const DelProdCart = createAsyncThunk<void, number | string>(
    "cart/DelProdCart",
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/Cart/delete-product-from-cart?id=${id}`);
            dispatch(GetCard())
        } catch (error: any) {
            console.error(error);
            return rejectWithValue("Ошибка при удалении товара");
        }
    }
);

export const DelAllProdInCart = createAsyncThunk<void>(
    "cart/DelAllProdInCart",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            await axiosInstance.delete("/Cart/clear-cart");
            dispatch(GetCard())
        } catch (error: any) {
            console.error(error);
            return rejectWithValue("Ошибка при очистке корзины");
        }
    }
);
