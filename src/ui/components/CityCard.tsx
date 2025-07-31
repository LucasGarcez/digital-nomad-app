import { ImageBackground, ImageBackgroundProps, Pressable } from "react-native";

import { Link } from "expo-router";
import { useAppTheme } from "../theme/useAppTheme";

import { CityPreview } from "@/src/domain/city/City";
import { useCityToggleFavorite } from "@/src/domain/city/operations/useCityToggleFavorite";
import { BlackOpacity } from "./BlackOpacity";
import { Box, TouchableOpacityBox } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type CityCardProps = {
  cityPreview: CityPreview;
  style?: ImageBackgroundProps["style"];
};

export function CityCard({ cityPreview, style }: CityCardProps) {
  const { borderRadii } = useAppTheme();
  const { mutate: toggleFavorite } = useCityToggleFavorite();
  return (
    <Link push href={`/city-details/${cityPreview.id}`} asChild>
      <Pressable>
        <ImageBackground
          source={
            typeof cityPreview.coverImage === "number"
              ? cityPreview.coverImage
              : { uri: cityPreview.coverImage }
          }
          style={[{ width: "100%", height: 280 }, style]}
          imageStyle={{ borderRadius: borderRadii.default }}
        >
          <BlackOpacity />
          <Box flex={1} padding="s24" justifyContent="space-between">
            <TouchableOpacityBox
              alignSelf="flex-end"
              onPress={() => {
                toggleFavorite({ cityId: cityPreview.id, isFavorite: false });
              }}
            >
              <Icon
                name={
                  cityPreview.isFavorite ? "Favorite-fill" : "Favorite-outline"
                }
                color={cityPreview.isFavorite ? "primary" : "text"}
              />
            </TouchableOpacityBox>

            <Box>
              <Text variant="title22">{cityPreview.name}</Text>
              <Text variant="text16">{cityPreview.country}</Text>
            </Box>
          </Box>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}
