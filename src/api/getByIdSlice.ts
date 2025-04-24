import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

interface ProductData {
    id: string;
    productName: string;
    price: number;
    images: string[];
}

export const ProdById = createAsyncThunk < ProductData, string> (
    "getbyid/ProdById",
    async (id) => {
        try {
            const { data } = await axiosInstance.get(`Product/get-product-by-id?id=${id}`);
            return data;
        } catch (error: any) {
            console.error(error);
            throw new Error("Ошибка при загрузке данных");
        }
    }
);
