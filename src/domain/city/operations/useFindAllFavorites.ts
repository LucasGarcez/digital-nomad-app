import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useFindAllFavorites() {
  const { city } = useRepository();

  return useAppQuery({
    queryKey: ["city", "favorite"],
    fetchData: () => city.findAllFavorites(),
  });
}
