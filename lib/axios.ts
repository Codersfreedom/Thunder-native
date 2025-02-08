import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://thunder-backend-rs1p.onrender.com/api/v1",

  withCredentials: true,
});
