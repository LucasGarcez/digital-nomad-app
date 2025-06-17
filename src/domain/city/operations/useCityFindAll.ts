import { useFetchData } from "@/src/data/useFetchData";
import { CityFindAllFilters, ICityRepo } from "../ICityRepo";

export function useCityFindAll(
  filters: CityFindAllFilters,
  repository: ICityRepo
) {
  return useFetchData(
    () => repository.findAll(filters),
    [filters.name, filters.categoryId]
  );
}
