import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsTouristAttractions({
  touristAttractions,
}: Pick<City, "touristAttractions">) {
  return (
    <Box paddingVertical="s24">
      <Text>CityDetailsTouristAttractions</Text>
    </Box>
  );
}
