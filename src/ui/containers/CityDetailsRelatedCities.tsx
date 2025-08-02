import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { City } from "../../domain/city/City";
import { useGetRelatedCities } from "../../domain/city/operations/useGetRelatedCities";
import { Box } from "../components/Box";
import { CityCard } from "../components/CityCard";
import { Text } from "../components/Text";
import { useAppTheme } from "../theme/useAppTheme";

type Props = Pick<City, "id">;
export function CityDetailsRelatedCities({ id }: Props) {
  const { data: cities } = useGetRelatedCities(id);

  const { spacing } = useAppTheme();
  const { bottom } = useSafeAreaInsets();

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
        {cities?.map((city) => (
          <CityCard key={city.id} cityPreview={city} size="small" />
        ))}
      </ScrollView>
    </Box>
  );
}
