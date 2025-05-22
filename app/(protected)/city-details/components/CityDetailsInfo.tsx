import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsInfo({
  country,
  name,
  description,
}: Pick<City, "country" | "name" | "description">) {
  return (
    <Box paddingVertical="s24">
      <Text>CityDetailsInfo</Text>
    </Box>
  );
}
