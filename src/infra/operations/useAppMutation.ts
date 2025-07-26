import { useMutation } from "@tanstack/react-query";

type UseAppMutationReturn<DataT, TVariables> = {
  mutate: (variable: TVariables) => DataT | void;
  isPending: boolean;
  error: unknown;
};

export type UseAppMutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
};

type UseAppMutationParams<TData, TVariables> = {
  mutationFn: (variable: TVariables) => Promise<TData>;
} & UseAppMutationOptions<TData>;

export function useAppMutation<TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TData, TVariables>): UseAppMutationReturn<
  TData,
  TVariables
> {
  const { isPending, error, mutate } = useMutation({
    mutationFn,
    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
    error,
  };
}
