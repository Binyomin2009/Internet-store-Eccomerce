import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance.js";

interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    data: string;
}

export const loginUser = createAsyncThunk<string, LoginRequest>(
    "auth/loginUser",
    async (obj, { rejectWithValue }) => {
        try {
            const { data }: { data: LoginResponse } = await axiosInstance.post("Account/login", obj);
            localStorage.setItem("token", data.data);
            window.location.href = "/"
            return data.data;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue(error.message);
        }
    }
);
