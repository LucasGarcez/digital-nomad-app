import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCityFindById(id: string) {
  const { city } = useRepository();
  return useAppQuery(() => city.findById(id));
}
