import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TRAILERS } from "../constants";
import { APIClient } from "../services/api-client";
import { GameTrailer } from "../entities/GameTrailer";

export const useGameTrailer = (gameId: string | number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);

  return useQuery<GameTrailer, Error>({
    queryKey: [CACHE_KEY_TRAILERS, gameId],
    queryFn: () => apiClient.getGameTrailer(),
    staleTime: ms("60m"),
    keepPreviousData: true,
  });
};
