import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { CityPreview } from "../City";

export function useCityToggleFavorite(
  params: Pick<CityPreview, "id" | "isFavorite">
) {
  const [isFavorite, setIsFavorite] = useState(params.isFavorite);
  const { city } = useRepository();
  const { authUser } = useAuth();

  const mutation = useAppMutation<void, void>({
    mutateFn: () => toggleFavorite(),
    onError: () => {
      // error toast
      setIsFavorite((prev) => !prev);
    },
  });

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
    return city.toggleFavorite({
      cityId: params.id,
      isFavorite: params.isFavorite,
      userId: authUser?.id as string,
    });
  }

  return {
    ...mutation,
    isFavorite,
  };
}
