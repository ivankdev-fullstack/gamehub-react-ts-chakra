import ms from "ms";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { APIClient, FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

export const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
