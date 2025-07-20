import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../../auth/AuthContext";

export function useCitySaveFavorite() {
  const { city } = useRepository();
  const { authUser } = useAuth();

  return useAppMutation<void, { cityId: string }>({
    mutateFn: ({ cityId }) => saveFavorite(cityId),
  });

  async function saveFavorite(cityId: string) {
    if (!authUser?.id) {
      return;
    }
    return city.saveFavorite({ userId: authUser?.id, cityId });
  }
}
