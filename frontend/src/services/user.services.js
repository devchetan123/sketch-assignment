import { getCURL } from "./helper"

export const userDetails = async (userId) => {
    const endpoint = `https://sketch-backend.onrender.com/users/${userId}`;
    const response = await getCURL(endpoint);
    return response;
}