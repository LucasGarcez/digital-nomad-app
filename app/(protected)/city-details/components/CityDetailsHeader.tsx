import { BlackOpacity } from "@/src/components/BlackOpacity";
import { Box } from "@/src/components/Box";
import { CategoryPill } from "@/src/components/CategoryPill";
import { Icon } from "@/src/components/Icon";
import { IconButton } from "@/src/components/IconButton";
import { PILL_HEIGHT } from "@/src/components/Pill";
import { City } from "@/src/types";
import { router } from "expo-router";
import { ImageBackground, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function CityDetailsHeader({
  id,
  categories,
  coverImage,
}: Pick<City, "id" | "coverImage" | "categories">) {
  const { top } = useSafeAreaInsets();
  console.log(top);
  return (
    <Box>
      <ImageBackground
        source={coverImage}
        style={{ width: "100%", height: 250 }}
        imageStyle={{ borderBottomRightRadius: 40 }}
      >
        <BlackOpacity />
      </ImageBackground>

      <Box position="absolute" marginLeft="padding" style={{ marginTop: top }}>
        <IconButton iconName="Close" onPress={() => router.back()} />
      </Box>
      <Box
        position="absolute"
        right={0}
        marginRight="padding"
        style={{ marginTop: top }}
      >
        <Icon size={30} name="Favorite-outline" color="text" />
      </Box>

      <ScrollView
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -PILL_HEIGHT / 2 }}
      >
        <Box paddingHorizontal="padding" flexDirection="row" gap="s8">
          {categories.map((category) => (
            <CategoryPill active={true} key={category.id} category={category} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
