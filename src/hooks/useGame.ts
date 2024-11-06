import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constants";
import { APIClient } from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

export const apiClient = new APIClient<Game>("/games");

export const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => apiClient.getById(slug),
    staleTime: ms("60m"),
    keepPreviousData: true,
  });
};
