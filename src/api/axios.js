import axios from "axios";

const instance = axios.create({
  baseURL: "https://crudauth-production.up.railway.app/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
