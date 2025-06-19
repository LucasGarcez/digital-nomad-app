import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCategoryFindAll() {
  const { category } = useRepository();

  return useAppQuery(() => category.findAll());
}
