import { getCURL } from "./helper"

export const userDetails = async (userId) => {
    const endpoint = `http://localhost:8000/users/${userId}`;
    const response = await getCURL(endpoint);
    return response;
}