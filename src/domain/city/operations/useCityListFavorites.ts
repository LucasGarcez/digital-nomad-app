import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../../auth/AuthContext";

export function useCityListFavorites() {
  const { city } = useRepository();
  const { authUser } = useAuth();

  return useAppQuery(["city", "favorites"], () =>
    city.listFavorites(authUser?.id as string)
  );
}
