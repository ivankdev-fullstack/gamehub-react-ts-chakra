import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { APIClient, FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.get,
    staleTime: ms("24h"),
  });
