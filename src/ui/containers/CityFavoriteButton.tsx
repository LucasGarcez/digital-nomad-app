import { CityPreview } from "@/src/domain/city/City";
import { useCityToggleFavorite } from "@/src/domain/city/operations/useCityToggleFavorite";
import { Pressable } from "react-native";
import { Icon } from "../components/Icon";

export function CityFavoriteButton({
  city,
  size,
}: {
  city: Pick<CityPreview, "id" | "isFavorite">;
  size?: number;
}) {
  const { mutate: toggleFavorite, isFavorite } = useCityToggleFavorite(city);

  return (
    <Pressable onPress={() => toggleFavorite()}>
      <Icon
        name={isFavorite ? "Favorite-fill" : "Favorite-outline"}
        color={isFavorite ? "primary" : "text"}
        size={size}
      />
    </Pressable>
  );
}
