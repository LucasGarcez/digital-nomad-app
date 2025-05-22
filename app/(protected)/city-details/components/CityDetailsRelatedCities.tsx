import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsRelatedCities({
  relatedCitiesIds,
}: Pick<City, "relatedCitiesIds">) {
  return (
    <Box paddingVertical="s24">
      <Text>CityDetailsRelatedCities</Text>
    </Box>
  );
}
