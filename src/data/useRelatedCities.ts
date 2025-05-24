import { CityPreview } from "../types";
import { cities } from "./cities";

export function useRelatedCities(relatedCitiesIds: string[]): CityPreview[] {
  const relatedCities = cities.filter((city) =>
    relatedCitiesIds?.includes(city.id)
  );

  return relatedCities;
}
