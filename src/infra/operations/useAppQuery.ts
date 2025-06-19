import { useEffect, useState } from "react";

type UseFetchDataReturn<DataT> = {
  data?: DataT;
  isLoading: boolean;
  error: unknown;
};

export function useAppQuery<DataT>(
  fetchData: () => Promise<DataT>,
  dependencies: React.DependencyList = []
): UseFetchDataReturn<DataT> {
  const [data, setData] = useState<DataT>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  async function _fetchData() {
    try {
      setIsLoading(true);
      setError(null);
      const _data = await fetchData();

      setData(_data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    _fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    data,
    isLoading,
    error,
  };
}
