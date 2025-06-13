import { useFetchData } from "../../../data/useFetchData";
import { useRepository } from "../../../infra/repositories/RepositoryProvider";
import { CityFindAllFilters } from "../CityRepository";

export function useCities(filters: CityFindAllFilters) {
  const { city } = useRepository();
  return useFetchData(
    () => city.findAll(filters),
    [filters.name, filters.categoryId]
  );
}
