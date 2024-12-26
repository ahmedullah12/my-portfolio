import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://portfolio-backend-fawn-ten.vercel.app/api"
})

export default axiosInstance;