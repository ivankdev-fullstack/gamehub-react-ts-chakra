import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
