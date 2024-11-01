import { CACHE_KEY_GENRES } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const apiClient = new APIClient<Genre>("/genres");

export const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
