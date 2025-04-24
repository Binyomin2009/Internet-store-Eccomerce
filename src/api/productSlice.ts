import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance.js";

interface Product {
    id: string;
    productName: string;
    price: number;
}

interface GetProductsResponse {
    products: Product[];
}

export const getProd = createAsyncThunk<GetProductsResponse, void>(
    "product/getProd",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get("Product/get-products");
            return data; 
        } catch (error: any) {
            console.error(error);
            return rejectWithValue(
                error.response?.data || "Ошибка при получении продуктов"
            );
        }
    }
);
