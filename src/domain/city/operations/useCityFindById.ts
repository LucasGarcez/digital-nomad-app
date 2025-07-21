import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../../auth/AuthContext";

export function useCityFindById(id: string) {
  const { city } = useRepository();
  const { authUser } = useAuth();

  return useAppQuery(["city", id], () =>
    city.findById({ id, userId: authUser?.id as string })
  );
}
