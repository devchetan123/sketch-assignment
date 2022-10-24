import { postCURL } from "./helper"

export const registerAPI = async (payload) => {
    const endpoint = "https://sketch-backend.onrender.com/auth/register";
    const response = await postCURL(payload, endpoint);
    return response;
}

export const loginAPI = async (payload) => {
    const endpoint = "https://sketch-backend.onrender.com/auth/login";
    const response = await postCURL(payload, endpoint);
    return response;
}