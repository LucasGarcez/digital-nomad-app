import { useQuery } from "@tanstack/react-query";

type UseFetchDataReturn<DataT> = {
  data?: DataT;
  isLoading: boolean;
  isPending: boolean;
  error: unknown;
};

type UseAppQueryParams<DataT> = {
  queryKey: (string | null | undefined | number)[];
  fetchData: () => Promise<DataT>;
};

export function useAppQuery<DataT>({
  fetchData,
  queryKey,
}: UseAppQueryParams<DataT>): UseFetchDataReturn<DataT> {
  const { data, isLoading, error, isPending } = useQuery({
    queryKey,
    queryFn: fetchData,
  });

  return {
    data,
    isLoading,
    isPending,
    error,
  };
}
