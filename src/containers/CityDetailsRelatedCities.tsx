import { ScrollView, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../components/Box";
import { CityCard } from "../components/CityCard";
import { Text } from "../components/Text";
import { useRelatedCities } from "../data/useRelatedCities";
import { useAppTheme } from "../theme/useAppTheme";
import { City } from "../types";

type Props = Pick<City, "relatedCitiesIds">;
export function CityDetailsRelatedCities({ relatedCitiesIds }: Props) {
  const cities = useRelatedCities(relatedCitiesIds);

  const { spacing } = useAppTheme();
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const cardWith = width * 0.7;
  const cardHeight = cardWith * 0.9;

  return (
    <Box style={{ paddingBottom: bottom }}>
      <Text variant="title22" mb="s16" paddingHorizontal="padding">
        Veja Também
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingHorizontal: spacing.padding,
        }}
      >
        {cities.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWith, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  );
}
