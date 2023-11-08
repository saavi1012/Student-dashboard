import axios from "axios";

const API_BASE_URL = "https://dummyjson.com/products";

export default axios.create({
  baseURL: API_BASE_URL,
});
