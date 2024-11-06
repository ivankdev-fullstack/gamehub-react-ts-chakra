import ms from "ms";
import { CACHE_KEY_GENRES } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { APIClient, FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

export const apiClient = new APIClient<Genre>("/genres");

export const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
