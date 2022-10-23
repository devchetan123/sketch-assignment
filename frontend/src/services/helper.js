import axios from "axios";

export const postCURL = async (payload, apiPath) => {
    return await axios.post(apiPath, payload);
}

export const getCURL = async (apiPath, headers) => {
    return await axios.get(apiPath, {headers})
}

export const postCURLwithHeaders = async (payload, apiPath, headers) => {
    return await axios.post(apiPath, payload, {headers});
}