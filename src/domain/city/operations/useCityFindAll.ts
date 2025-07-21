import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../../auth/AuthContext";
import { CityFindAllFilters } from "../ICityRepo";

export function useCityFindAll(filters: CityFindAllFilters) {
  const { city } = useRepository();
  const { authUser } = useAuth();

  return useAppQuery(["city", filters.name, filters.categoryId], () =>
    city.findAll(filters, authUser?.id as string)
  );
}
