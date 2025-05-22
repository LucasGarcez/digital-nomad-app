import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsMap({ location }: Pick<City, "location">) {
  return (
    <Box paddingVertical="s24">
      <Text>CityDetailsMap</Text>
    </Box>
  );
}
