import { ImageBackground, Pressable, useWindowDimensions } from "react-native";

import { Link } from "expo-router";
import { useAppTheme } from "../theme/useAppTheme";

import { CityPreview } from "@/src/domain/city/City";
import { BlackOpacity } from "./BlackOpacity";
import { Box } from "./Box";
import { CityFavoriteButton } from "./CityFavoriteButton";
import { Text } from "./Text";

type CityCardProps = {
  cityPreview: CityPreview;
  type?: "small" | "large";
  disableFavorite?: boolean;
};

export function CityCard({
  cityPreview,
  type = "large",
  disableFavorite = false,
}: CityCardProps) {
  const { borderRadii } = useAppTheme();

  const { width } = useWindowDimensions();

  const cardWith = width * 0.7;
  const cardHeight = cardWith * 0.9;

  const style =
    type === "small" ? { width: cardWith, height: cardHeight } : undefined;

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
            {
              <Box alignSelf="flex-end">
                {!disableFavorite && <CityFavoriteButton city={cityPreview} />}
              </Box>
            }

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
