import ms from "ms";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constants";
import { APIClient, FetchResponse } from "../services/api-client";
import { useGameQueryStore } from "../store/gameQueryStore";
import { Game } from "../entities/Game";

export const apiClient = new APIClient<Game>("/games");

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};
