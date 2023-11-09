import axios from "axios";

const API_BASE_URL = "https://mocki.io/v1/79741a16-0995-4435-9dde-12e99490d7f7";

export default axios.create({
  baseURL: API_BASE_URL,
});
