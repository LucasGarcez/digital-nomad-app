import { QueryKeys } from "@/src/infra/operations/QueryKeys";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { CityPreview } from "../City";

export function useCityToggleFavorite(
  params: Pick<CityPreview, "id" | "isFavorite">
) {
  const [isFavorite, setIsFavorite] = useState(params.isFavorite);
  const { city } = useRepository();
  const { authUser } = useAuth();

  const queryClient = useQueryClient();

  useEffect(() => {
    setIsFavorite(params.isFavorite);
  }, [params.isFavorite]);

  const mutation = useAppMutation<void, void>({
    mutateFn: () => toggleFavorite(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.city] });
    },
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
