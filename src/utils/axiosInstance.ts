import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

axiosInstance.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("@accessToken");
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});
