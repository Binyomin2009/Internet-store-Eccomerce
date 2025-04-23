"use client"

import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axiosInstance.js"


export const ProdById = createAsyncThunk(
    "getbyid/ProdById",
    async (id) => {
        try {
            const { data } = await axiosInstance.post(`Product/get-product-by-id?id=${id}`);
            return data;
        } catch (error) {
            console.error(error);
        }
    }
);
