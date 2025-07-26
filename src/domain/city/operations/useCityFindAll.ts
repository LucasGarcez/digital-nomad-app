import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useQuery } from "@tanstack/react-query";
import { CityFindAllFilters } from "../ICityRepo";

export function useCityFindAll(filters: CityFindAllFilters) {
  const { city } = useRepository();

  const { data, error, isLoading, isFetching, status } = useQuery({
    queryKey: ["city", filters.name, filters.categoryId],
    queryFn: () => city.findAll(filters),
  });

  console.log({ isLoading, isFetching, status });

  return {
    data,
    error,
    isLoading,
  };

  // return useAppQuery(
  //   () => city.findAll(filters),
  //   [filters.name, filters.categoryId]
  // );
}
