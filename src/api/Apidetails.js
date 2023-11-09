import axios from "axios";

const API_BASE_URL = "https://mocki.io/v1/51129926-43d2-4486-8f84-e03a768ec584";

export default axios.create({
  baseURL: API_BASE_URL,
});
