import { postCURL } from "./helper"

export const registerAPI = async (payload) => {
    const endpoint = "http://localhost:8000/auth/register";
    const response = await postCURL(payload, endpoint);
    return response;
}