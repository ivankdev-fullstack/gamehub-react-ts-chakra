import { CACHE_KEY_PLATFORMS } from "../constants";
import { apiClient, Platform } from "../services/platformService";
import { useQuery } from "@tanstack/react-query";

export const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
