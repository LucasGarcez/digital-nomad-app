import { useEffect, useState } from "react";
import { AppError } from "../error/AppError";
import { createAppError } from "../error/AppErrorFactory";

type UseAppQueryReturn<DataT> = {
  data?: DataT;
  isLoading: boolean;
  error: AppError | null;
};

export function useAppQuery<DataT>(
  fetchData: () => Promise<DataT>,
  dependencies: React.DependencyList = []
): UseAppQueryReturn<DataT> {
  const [data, setData] = useState<DataT>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AppError | null>(null);

  async function _fetchData() {
    try {
      setError(null);
      setIsLoading(true);
      const _data = await fetchData();

      setData(_data);
    } catch (error) {
      setError(createAppError(error));
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
