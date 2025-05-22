import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsHeader({
  id,
  categories,
  coverImage,
}: Pick<City, "id" | "coverImage" | "categories">) {
  return (
    <Box paddingVertical="s24">
      <Text>CityDetailsHeader</Text>
    </Box>
  );
}
