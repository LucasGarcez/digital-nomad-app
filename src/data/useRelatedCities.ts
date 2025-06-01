import { CityPreview } from "../types";
import { cities } from "./cities";

export function useRelatedCities(relatedCitiesIds: string[]): CityPreview[] {
  return cities.filter((city) => relatedCitiesIds.includes(city.id));
}
