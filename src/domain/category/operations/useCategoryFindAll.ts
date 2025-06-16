import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useFetchData } from "../../../data/useFetchData";

export function useCategoryFindAll() {
  const { category } = useRepository();
  return useFetchData(() => category.findAll());
}
