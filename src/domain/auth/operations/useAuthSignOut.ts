import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../AuthContext";

export function useAuthSignOut() {
  const { auth } = useRepository();
  const { removeAuthUser } = useAuth();

  return useAppMutation({
    mutateFn: () => auth.signOut(),
    onSuccess: () => {
      removeAuthUser();
    },
  });
}
