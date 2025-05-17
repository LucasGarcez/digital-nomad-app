import { Box } from "@/src/components/Box";
import { CityCard } from "@/src/components/CityCard";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  // const { colors } = useAppTheme();

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Box>
  );
}
