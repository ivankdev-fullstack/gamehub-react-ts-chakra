import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResult<T> {
  count: number;
  results: T[];
}

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get(endpoint, { ...requestConfig, signal: controller.signal })
        .then(({ data }: { data: FetchResult<T> }) => {
          setData(data.results);
          setLoading(false);
        })
        .catch((err: Error) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};
