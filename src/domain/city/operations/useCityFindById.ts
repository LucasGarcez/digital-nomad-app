import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useFetchData } from "../../../data/useFetchData";

export function useCityFindById(id: string) {
  const { city } = useRepository();
  return useFetchData(() => city.findById(id));
}
