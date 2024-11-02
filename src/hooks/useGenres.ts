import { CACHE_KEY_GENRES } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { APIClient, FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const apiClient = new APIClient<Genre>("/genres");

export const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.get,
    staleTime: ms("24h"),
  });
