import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

import { ScrollView, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CityCard } from "../components/CityCard";
import { useRelatedCities } from "../data/useRelatedCities";
import { useAppTheme } from "../theme/useAppTheme";

export function CityDetailsRelatedCities({
  relatedCitiesIds,
}: Pick<City, "relatedCitiesIds">) {
  const { spacing } = useAppTheme();
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const relatedCities = useRelatedCities(relatedCitiesIds);

  const cardWidth = width * 0.7;
  const cardHeight = cardWidth * 0.9;
  return (
    <Box style={{ paddingBottom: bottom }}>
      <Text variant="title22" mb="s16" marginHorizontal="padding">
        Veja também
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: spacing.padding }}
      >
        {relatedCities.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWidth, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  );
}
