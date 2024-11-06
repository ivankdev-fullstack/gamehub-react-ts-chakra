import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constants";
import { APIClient } from "../services/api-client";
import ms from "ms";

export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
}

export const apiClient = new APIClient<GameDetails>("/games");

export const useGame = (slug: string) => {
  return useQuery<GameDetails, Error>({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => apiClient.getById(slug),
    staleTime: ms("60m"),
    keepPreviousData: true,
  });
};
