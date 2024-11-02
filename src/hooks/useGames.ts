import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { Platform } from "./usePlatforms";
import { APIClient, FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export const apiClient = new APIClient<Game>("/games");

export const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
