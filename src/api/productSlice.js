import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance.js";

export const getProd = createAsyncThunk(
    "product/getProd",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get("Product/get-products");
            return data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response?.data || "Ошибка при получении продуктов");
        }
    }
);
