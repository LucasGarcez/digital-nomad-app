import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../../auth/AuthContext";

export function useGetRelatedCities(cityId: string) {
  const { city } = useRepository();
  const { authUser } = useAuth();

  return useAppQuery(["city", "related", cityId], () =>
    city.getRelatedCities({ cityId, userId: authUser?.id as string })
  );
}
