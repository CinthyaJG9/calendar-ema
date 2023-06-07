import axios from "axios";

const calendarApi = axios.create({
  baseURL: "http://10-production.up.railway.app/api",
});

calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default calendarApi;
