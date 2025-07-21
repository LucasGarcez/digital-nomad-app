import { Image, Pressable, useWindowDimensions } from "react-native";

import { Link } from "expo-router";
import { useAppTheme } from "../theme/useAppTheme";

import { CityPreview } from "@/src/domain/city/City";
import { CityFavoriteButton } from "../containers/CityFavoriteButton";
import { Box } from "./Box";
import { Text } from "./Text";

type FavoriteCardProps = {
  cityPreview: CityPreview;
};

export function FavoriteCard({ cityPreview }: FavoriteCardProps) {
  const { borderRadii } = useAppTheme();
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
              <Text variant="text14">{cityPreview.country}</Text>
            </Box>
          </Box>
          <Box>
            <CityFavoriteButton city={cityPreview} />
          </Box>
        </Box>
      </Pressable>
    </Link>
  );
}
