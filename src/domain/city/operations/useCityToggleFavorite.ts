import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { CityToggleFavoriteParams } from "../ICityRepo";

export function useCityToggleFavorite() {
  const { city } = useRepository();

  return useAppMutation<void, CityToggleFavoriteParams>({
    mutationFn: (variables) => city.toggleFavorite(variables),
  });
}
