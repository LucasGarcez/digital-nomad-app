import { cities } from "./cities";

export function useCityDetails(id: string) {
  const city = cities.find((city) => city.id === id);
  return city;
}
