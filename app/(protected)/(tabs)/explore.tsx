import { CitiesGroupedByCategory } from "@/src/domain/city/ICityRepo";
import { useCityFindGroupedByCategory } from "@/src/domain/city/operations/useCityFindGroupedByCategory";
import { CitiesGroupedByCategoryItem } from "@/src/ui/components/CitiesGroupedByCategoryItem";
import { Screen } from "@/src/ui/components/Screen";
import { Separator } from "@/src/ui/components/Separator";
import { useAppTheme } from "@/src/ui/theme/useAppTheme";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const { data } = useCityFindGroupedByCategory();
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CitiesGroupedByCategory>) {
    return <CitiesGroupedByCategoryItem {...item} />;
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.category.id}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
      />
    </Screen>
  );
}
