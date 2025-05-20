import { useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
  categories: Category[];
};
export function CityFilter({ categories }: CityFilterProps) {
  const [name, setName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  return (
    <Box>
      <SearchInput
        value={name}
        onChangeText={setName}
        placeholder="Qual seu próximo destino?"
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              active={category.id === selectedCategoryId}
              category={category}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
