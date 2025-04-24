import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance.js";

interface Category {
    id: string;
    name: string;
}

interface GetCategoriesResponse {
    categories: Category[];
}

export const GetSubCateg = createAsyncThunk<GetCategoriesResponse, void>(
    "subCateg/GetSubCateg",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get("Category/get-categories");
            return data; 
        } catch (error: any) {
            console.error(error);
            return rejectWithValue(
                error.response?.data || "Ошибка при получении категорий"
            );
        }
    }
);
