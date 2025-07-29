import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useCityToggleFavorite() {
  const { city } = useRepository();

  return useAppMutation<void, { cityId: string; isFavorite: boolean }>({
    mutationFn: ({ cityId, isFavorite }) =>
      city.toggleFavorite(cityId, isFavorite),
  });
}
