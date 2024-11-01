import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { apiClient, Game } from "../services/gameService";
import { CACHE_KEY_GAMES } from "../constants";

export const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      apiClient.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
