import { useQuery } from "@tanstack/react-query";

type UseFetchDataReturn<DataT> = {
  data?: DataT;
  isLoading: boolean;
  error: unknown;
};

export function useAppQuery<DataT>(
  queryKey: unknown[],
  fetchData: () => Promise<DataT>
): UseFetchDataReturn<DataT> {
  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
  });

  return {
    data,
    isLoading,
    error,
  };
}
