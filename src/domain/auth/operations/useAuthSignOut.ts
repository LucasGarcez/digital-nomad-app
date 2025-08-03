import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../AuthContext";

export function useAuthSignOut() {
  const { auth } = useRepository();
  const { removeAuthUser } = useAuth();

  const queryClient = useQueryClient();

  return useAppMutation({
    mutationFn: () => auth.signOut(),
    onSuccess: () => {
      queryClient.clear();
      removeAuthUser();
    },
  });
}
