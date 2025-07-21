import { CityPreview } from "@/src/domain/city/City";
import { useCityListFavorites } from "@/src/domain/city/operations/useCityListFavorites";
import { FlatListProps, ListRenderItemInfo } from "react-native";

import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import Animated, { FadingTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FavoriteCard } from "../../components/FavoriteCard";
import { useAppTheme } from "../../theme/useAppTheme";

type CityFavoriteListProps = {
  ListFooterComponent?: FlatListProps<CityPreview>["ListFooterComponent"];
  ListHeaderComponent?: FlatListProps<CityPreview>["ListHeaderComponent"];
};
export function CityFavoriteList({
  ListFooterComponent,
  ListHeaderComponent,
}: CityFavoriteListProps) {
  const { data: cities } = useCityListFavorites();

  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <FavoriteCard cityPreview={item} />;
  }

  return (
    <Animated.FlatList
      itemLayoutAnimation={FadingTransition.duration(500)}
      ref={flatListRef}
      data={cities}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        gap: spacing.padding,
        paddingTop: top,
        paddingBottom: spacing.padding,
      }}
      ListFooterComponent={ListFooterComponent}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}
