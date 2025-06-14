import {
  useAppMutation,
  UseAppMutationOption,
} from "@/src/infra/data/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { AuthSignUpParams } from "../AuthRepository";

export function useAuthSignUp(options?: UseAppMutationOption<void>) {
  const { auth } = useRepository();

  return useAppMutation<void, AuthSignUpParams>({
    mutateFn: auth.signUp,
    ...options,
  });
}
