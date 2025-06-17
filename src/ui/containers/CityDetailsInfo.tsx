import { City } from "@/src/domain/city/City";
import { Box } from "../components/Box";
import { Text } from "../components/Text";

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">;

export function CityDetailsInfo({
  name,
  country,
  description,
}: CityDetailsInfoProps) {
  return (
    <Box padding="padding">
      <Text variant="title28" mb="s2">
        {name}
      </Text>
      <Text variant="text18" mb="s24">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  );
}
