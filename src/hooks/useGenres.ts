import { apiClient, Genre } from "../services/genreService";
import { CACHE_KEY_GENRES } from "../constants";
import { useQuery } from "@tanstack/react-query";

export const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
