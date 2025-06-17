import { useFetchData } from "@/src/data/useFetchData";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useGetRelatedCities(id: string) {
  const { city } = useRepository();
  return useFetchData(() => city.getRelatedCities(id));
}
