"use client"

import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axiosInstance.js"


export const Registration = createAsyncThunk(
    "auth/Registration",
    async (obj) => {
        try {
            const { data } = await axiosInstance.post("Account/register", obj);
            window.location.href = "/login";
            return data;
        } catch (error) {
            console.error(error);
        }
    }
  );
  