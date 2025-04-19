"use client"

import { jwtDecode } from "jwt-decode";
function saveToken(token) {
    localStorage.setItem("token", token);
}

function getToken() {
    try {
        return jwtDecode(localStorage.getItem("token"))
    } catch (error) { }
}

function destroyToken() {
    localStorage.removeItem("token")
}

export { saveToken, destroyToken, getToken }
