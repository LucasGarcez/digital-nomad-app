import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useGetRelatedCities(id: string) {
  const { city } = useRepository();
  return useAppQuery(["city", "related", id], () => city.getRelatedCities(id));
}
