import { CitiesGroupedByCategory } from "@/src/domain/city/ICityRepo";

import { ScrollView } from "react-native";
import { Box } from "./Box";
import { categoryIconMap } from "./CategoryPill";
import { CityCard } from "./CityCard";
import { Icon } from "./Icon";
import { Text } from "./Text";

export function CitiesGroupedByCategoryList({
  category,
  cities,
}: CitiesGroupedByCategory) {
  return (
    <Box>
      <Box flexDirection="row" ml="s16">
        <Icon name={categoryIconMap[category.code]} color="primary" />
        <Box ml="s12">
          <Text variant="title22">{category.name}</Text>
          <Text variant="text14" mb="s16">
            {category.description}
          </Text>
        </Box>
      </Box>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 16, paddingLeft: 16 }}
      >
        {cities.map((city) => (
          <CityCard key={city.id} cityPreview={city} size="small" />
        ))}
      </ScrollView>
    </Box>
  );
}
