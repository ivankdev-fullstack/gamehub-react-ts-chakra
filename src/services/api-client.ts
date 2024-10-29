import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "80f654426b13420a9ff0c37faba8723b",
  },
});
