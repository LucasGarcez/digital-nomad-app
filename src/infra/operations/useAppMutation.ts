import { useMutation } from "@tanstack/react-query";

type UseAppMutationReturn<DataT, TVariables> = {
  mutate: (variable: TVariables) => DataT | void;
  isLoading: boolean;
  error: unknown;
};

export type UseAppMutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
};

type UseAppMutationParams<TData, TVariables> = {
  mutateFn: (variable: TVariables) => Promise<TData>;
} & UseAppMutationOptions<TData>;

export function useAppMutation<TData, TVariables>({
  mutateFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TData, TVariables>): UseAppMutationReturn<
  TData,
  TVariables
> {
  const { isPending, error, mutate } = useMutation({
    mutationFn: mutateFn,
    onSuccess: onSuccess,
    onError: onError,
  });

  return {
    mutate: (variables) => mutate(variables),
    isLoading: isPending,
    error,
  };
}
