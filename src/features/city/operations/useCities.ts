import { useAppQuery } from "@/src/infra/data/useAppQuery";
import { useRepository } from "../../../infra/repositories/RepositoryProvider";
import { CityFindAllFilters } from "../CityRepository";

export function useCities(filters: CityFindAllFilters) {
  const { city } = useRepository();
  return useAppQuery(
    () => city.findAll(filters),
    [filters.name, filters.categoryId]
  );
}
