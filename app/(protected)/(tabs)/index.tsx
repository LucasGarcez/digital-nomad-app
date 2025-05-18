import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { cityPreviewList } from "@/src/data/cities";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { CityPreview } from "@/src/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  const { spacing } = useAppTheme();

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{ gap: spacing.padding }}
        data={cityPreviewList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}
