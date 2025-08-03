import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCityFindGroupedByCategory() {
  const { city } = useRepository();

  return useAppQuery({
    queryKey: ["city", "category-grouped"],
    fetchData: () => city.findGroupedByCategory(),
  });
}
