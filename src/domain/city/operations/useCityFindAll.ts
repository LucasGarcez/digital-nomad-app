import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { CityFindAllFilters } from "../ICityRepo";

export function useCityFindAll(filters: CityFindAllFilters) {
  const { city } = useRepository();

  return useAppQuery(
    () => city.findAll(filters),
    [filters.name, filters.categoryId]
  );
}
