import { QueryKeys } from "@/src/infra/operations/QueryKeys";
import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCategoryFindAll() {
  const { category } = useRepository();

  return useAppQuery([QueryKeys.category], () => category.findAll());
}
