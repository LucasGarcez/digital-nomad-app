import { CityPreview } from "@/src/domain/city/City";
import { useFindAllFavorites } from "@/src/domain/city/operations/useFindAllFavorites";
import { FlatList, FlatListProps, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FavoriteCityCard } from "../../components/FavoriteCityCard";
import { useAppTheme } from "../../theme/useAppTheme";

export function FavoriteCityList({
  ListFooterComponent,
  ListHeaderComponent,
}: Pick<
  FlatListProps<CityPreview>,
  "ListFooterComponent" | "ListHeaderComponent"
>) {
  const { data: favoriteList } = useFindAllFavorites();
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <FavoriteCityCard cityPreview={item} />;
  }

  return (
    <FlatList
      data={favoriteList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={{
        gap: spacing.padding,
        paddingTop: top,
        paddingBottom: spacing.padding,
      }}
    />
  );
}
