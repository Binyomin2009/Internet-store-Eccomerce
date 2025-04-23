"use client"

import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axiosInstance.js"

export const GetSubCateg = createAsyncThunk(
    "subCateg/GetSubCateg",
    async () => {
        try {
            const { data } = await axiosInstance.get("Category/get-categories")
            return data
        } catch (error) {
            console.error(error);
        }
    }
)