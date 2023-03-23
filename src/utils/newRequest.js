import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fair-rose-dhole-belt.cyclic.app/api",
  withCredentials: true,
});

export default newRequest;
