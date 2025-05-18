import { ImageBackground } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { CityPreview } from "../types";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type CityCardProps = {
  cityPreview: CityPreview;
};

export function CityCard({ cityPreview }: CityCardProps) {
  const { borderRadii } = useAppTheme();
  return (
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: "100%", height: 280 }}
      imageStyle={{ borderRadius: borderRadii.default }}
    >
      <Box flex={1} padding="s24" justifyContent="space-between">
        <Box alignSelf="flex-end">
          <Icon name="Favorite-outline" color="text" />
        </Box>

        <Box>
          <Text variant="title22">{cityPreview.name}</Text>
          <Text variant="text16">{cityPreview.country}</Text>
        </Box>
      </Box>
    </ImageBackground>
  );
}
