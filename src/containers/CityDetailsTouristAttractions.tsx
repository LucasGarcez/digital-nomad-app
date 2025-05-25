import { Accordion } from "../components/Accordion";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";

type Props = Pick<City, "touristAttractions">;
export function CityDetailsTouristAttractions({ touristAttractions }: Props) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos turísticos
      </Text>
      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  );
}
