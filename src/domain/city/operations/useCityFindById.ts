import { useFetchData } from "@/src/data/useFetchData";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCityFindById(id: string) {
  const { city } = useRepository();
  return useFetchData(() => city.findById(id));
}
