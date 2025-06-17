import { useFetchData } from "@/src/data/useFetchData";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCategoryFindAll() {
  const { category } = useRepository();

  return useFetchData(() => category.findAll());
}
