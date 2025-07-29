import { Image, Pressable, useWindowDimensions } from "react-native";

import { Link } from "expo-router";
import { useAppTheme } from "../theme/useAppTheme";

import { CityPreview } from "@/src/domain/city/City";
import { useCityToggleFavorite } from "@/src/domain/city/operations/useCityToggleFavorite";
import { Box, TouchableOpacityBox } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type FavoriteCityCardProps = {
  cityPreview: CityPreview;
};

export function FavoriteCityCard({ cityPreview }: FavoriteCityCardProps) {
  const { borderRadii } = useAppTheme();
  const { mutate: toggleFavorite } = useCityToggleFavorite();

  const { width } = useWindowDimensions();
  const IMAGE_WIDTH = width * 0.3;
  const IMAGE_HEIGHT = IMAGE_WIDTH * 0.75;

  return (
    <Link push href={`/city-details/${cityPreview.id}`} asChild>
      <Pressable>
        <Box
          flexDirection="row"
          backgroundColor="gray1"
          padding="s12"
          borderRadius="default"
          justifyContent="space-between"
        >
          <Box flexDirection="row">
            <Image
              source={
                typeof cityPreview.coverImage === "number"
                  ? cityPreview.coverImage
                  : { uri: cityPreview.coverImage }
              }
              style={[
                {
                  width: IMAGE_WIDTH,
                  height: IMAGE_HEIGHT,
                  borderRadius: borderRadii.default,
                },
              ]}
            />

            <Box ml="s16" justifyContent="center">
              <Text variant="title16">{cityPreview.name}</Text>
              <Text variant="text16">{cityPreview.country}</Text>
            </Box>
          </Box>

          <Box>
            <TouchableOpacityBox
              alignSelf="flex-end"
              onPress={() => {
                toggleFavorite({ cityId: cityPreview.id, isFavorite: false });
              }}
            >
              <Icon name="Favorite-outline" color="text" />
            </TouchableOpacityBox>
          </Box>
        </Box>
      </Pressable>
    </Link>
  );
}
