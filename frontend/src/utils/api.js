import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8000/api/V1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
