"use client"

import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/authSlice.js"

const Login = () => {


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    function login() {
        const user = {
            userName: userName,
            password: password
        }
        dispatch(loginUser(user))
    }


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center">Log in to Exclusive</h1>
            <p className="text-gray-500 text-center mb-4">Enter your details below</p>

            <div className="flex flex-col gap-[20px]">
                <TextField value={userName} onChange={(e) => setUserName(e.target.value)} label="Name" variant="outlined" fullWidth className="mb-4" />
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" type="password" fullWidth className="mb-4" />

                <Button variant="contained" color="error" fullWidth className="mb-4" onClick={() => login()}>
                    Log in
                </Button>

                <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} className="mb-4">
                    Sign up with Google
                </Button>

                <p className="text-center text-gray-500">
                    if you don't have an account? <Link href="/signup" className="text-red-500">Create Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
