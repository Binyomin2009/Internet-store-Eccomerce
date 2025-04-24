import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance.js";

interface RegistrationRequest {
  username: string;
  email: string;
  password: string;
}

interface RegistrationResponse {
  message: string;  
  data: any;
}

export const Registration = createAsyncThunk<RegistrationResponse, RegistrationRequest>(
  "auth/Registration",
  async (obj, { rejectWithValue }) => {
    try {
      const { data }: { data: RegistrationResponse } = await axiosInstance.post("Account/register", obj);
      window.location.href = "/login";
      return data;
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Ошибка при регистрации");
    }
  }
);
