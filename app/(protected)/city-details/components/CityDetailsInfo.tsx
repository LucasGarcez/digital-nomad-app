import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsInfo({
  country,
  name,
  description,
}: Pick<City, "country" | "name" | "description">) {
  return (
    <Box marginTop="s16" paddingHorizontal="padding">
      <Text variant="title28" mb="s4">
        {name}
      </Text>
      <Text variant="text18" mb="s24">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  );
}
