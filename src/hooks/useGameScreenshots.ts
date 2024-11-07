import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_SCREENSHOTS } from "../constants";
import { APIClient, FetchResponse } from "../services/api-client";
import { GameScreenshot } from "../entities/GameScreenshot";

export const useGameScreenshots = (gameId: string | number) => {
  const apiClient = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery<FetchResponse<GameScreenshot>, Error>({
    queryKey: [CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: () => apiClient.getGameScreenshots(),
    staleTime: ms("60m"),
    keepPreviousData: true,
  });
};
