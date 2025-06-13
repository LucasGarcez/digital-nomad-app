import {
  useAppMutation,
  UseAppMutationOption,
} from "@/src/infra/data/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { AuthUser } from "../Auth";

export function useAuthSignIn(options?: UseAppMutationOption<AuthUser>) {
  const { auth } = useRepository();
  return useAppMutation<AuthUser, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.signIn(email, password),
    ...options,
  });
}
