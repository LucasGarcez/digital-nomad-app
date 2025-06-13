import {
  useAppMutation,
  UseAppMutationOption,
} from "@/src/infra/data/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { AuthUser } from "../Auth";
import { useAuthStore } from "../AuthContext";

export function useAuthSignIn(options?: UseAppMutationOption<AuthUser>) {
  const { auth } = useRepository();
  const authStore = useAuthStore();

  return useAppMutation<AuthUser, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.signIn(email, password),
    onSuccess: (authUser) => {
      authStore.signIn(authUser);
      options?.onSuccess?.(authUser);
    },
    onError: options?.onError,
  });
}
