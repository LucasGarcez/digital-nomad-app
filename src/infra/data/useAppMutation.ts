import { useState } from "react";
import { AppError } from "../error/AppError";
import { createAppError } from "../error/AppErrorFactory";

type UseAppMutationParams<DataT, VariablesT> = {
  mutateFn: (variables: VariablesT) => Promise<DataT>;
  onSuccess?: (data: DataT) => void;
  onError?: (error: AppError) => void;
};

export type UseAppMutationOption<DataT> = {
  onSuccess?: (data: DataT) => void;
  onError?: (error: AppError) => void;
};

type UseAppMutationReturn<DataT, VariablesT> = {
  mutate: (variables: VariablesT) => Promise<DataT | void>;
  isLoading: boolean;
  error: AppError | null;
};

export function useAppMutation<DataT, VariablesT>({
  mutateFn,
  onError,
  onSuccess,
}: UseAppMutationParams<DataT, VariablesT>): UseAppMutationReturn<
  DataT,
  VariablesT
> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  async function mutate(params: VariablesT): Promise<DataT | undefined> {
    try {
      setIsLoading(true);
      setError(null);
      const data = await mutateFn(params);
      onSuccess?.(data);
    } catch (error) {
      const appError = createAppError(error);
      onError?.(appError);
      setError(appError);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    mutate,
  };
}
