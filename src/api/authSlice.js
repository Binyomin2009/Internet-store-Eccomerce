"use client"

import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axiosInstance.js"

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (obj) => {
        try {
            const { data } = await axiosInstance.post("Account/login", obj)
            localStorage.setItem("token", data.data)
            window.location.href = "/"
        } catch (error) {
            console.error(error);
        }   
    }
)