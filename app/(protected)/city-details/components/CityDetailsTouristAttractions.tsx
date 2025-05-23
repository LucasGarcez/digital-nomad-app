import { Accordion } from "@/src/components/Accordion";
import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";

export function CityDetailsTouristAttractions({
  touristAttractions,
}: Pick<City, "touristAttractions">) {
  return (
    <Box paddingHorizontal="padding">
      <Text variant="title22" mb="s8">
        Pontos Turísticos
      </Text>

      <Box gap="s16">
        {touristAttractions.map((attraction) => (
          <Box key={attraction.id}>
            <Accordion
              title={attraction.name}
              description={attraction.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
