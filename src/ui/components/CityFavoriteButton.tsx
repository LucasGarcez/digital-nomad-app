import { City } from "@/src/domain/city/City";
import { useCityToggleFavorite } from "@/src/domain/city/operations/useCityToggleFavorite";
import { TouchableOpacityBox } from "./Box";
import { Icon } from "./Icon";

export function CityFavoriteButton({
  city,
  size,
}: {
  city: Pick<City, "id" | "isFavorite">;
  size?: number;
}) {
  const { mutate: toggleFavorite, isFavorite } = useCityToggleFavorite(city);

  return (
    <TouchableOpacityBox
      onPress={() => {
        toggleFavorite({ cityId: city.id, isFavorite: false });
      }}
    >
      <Icon
        size={size}
        name={isFavorite ? "Favorite-fill" : "Favorite-outline"}
        color={isFavorite ? "primary" : "text"}
      />
    </TouchableOpacityBox>
  );
}
