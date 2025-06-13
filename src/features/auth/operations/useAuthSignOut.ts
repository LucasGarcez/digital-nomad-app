import {
  useAppMutation,
  UseAppMutationOption,
} from "@/src/infra/data/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuthStore } from "../AuthContext";

export function useAuthSignOut(options?: UseAppMutationOption<void>) {
  const { auth } = useRepository();
  const authStore = useAuthStore();

  return useAppMutation({
    mutateFn: () => auth.signOut(),
    onSuccess: () => {
      authStore.signOut();
      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
}
