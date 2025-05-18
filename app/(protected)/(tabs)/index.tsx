import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { FlatList, ListRenderItemInfo, Text as RNText } from "react-native";

export default function HomeScreen() {
  // const { colors } = useAppTheme();

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <Text variant="title28">Barcelona</Text>
      <RNText style={{ color: "#fff", fontSize: 28 }}>Barcelona</RNText>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  );
}
