import axios from "axios";

const instance = axios.create({
  baseURL: "https://crudfront1-production.up.railway.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://crudfront1-production.up.railway.app/register https://crudfront1-production.up.railway.app/login",
  },
});

export default instance;
