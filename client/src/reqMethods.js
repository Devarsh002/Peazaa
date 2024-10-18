import axios from "axios"
const BASE_URL = "https://peaza-zeta.vercel.app/"

export const userReq = axios.create({
    baseURL: BASE_URL,
});