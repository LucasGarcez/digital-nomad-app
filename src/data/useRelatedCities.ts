import { useRepository } from "../infra/repositories/RepositoryProvider";
import { useFetchData } from "./useFetchData";

export function useRelatedCities(cityId: string) {
  const { city } = useRepository();
  return useFetchData(() => city.getRelatedCities(cityId));
}
// return cities.filter((city) => relatedCitiesIds.includes(city.id));
