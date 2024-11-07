import axios, { AxiosRequestConfig } from "axios";
import { GameTrailer } from "../entities/GameTrailer";

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "80f654426b13420a9ff0c37faba8723b",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getById = async (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + `/${id}`)
      .then((res) => res.data);
  };

  getGameMovie = async (gameId: number | string) => {
    return axiosInstance
      .get<FetchResponse<GameTrailer>>(this.endpoint)
      .then((res) => res.data.results[0]);
  };
}
