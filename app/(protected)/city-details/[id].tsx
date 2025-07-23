import { useCityFindById } from "@/src/domain/city/operations/useCityFindById";
import { Box } from "@/src/ui/components/Box";
import { Divider } from "@/src/ui/components/Divider";
import { Screen } from "@/src/ui/components/Screen";
import { Text } from "@/src/ui/components/Text";
import { BottomSheetMap } from "@/src/ui/containers/BottomSheetMap";
import { CityDetailsHeader } from "@/src/ui/containers/CityDetailsHeader";
import { CityDetailsInfo } from "@/src/ui/containers/CityDetailsInfo";
import { CityDetailsMap } from "@/src/ui/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "@/src/ui/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "@/src/ui/containers/CityDetailsTouristAttractions";
import { useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";
import Animated, { FadeIn, useSharedValue } from "react-native-reanimated";

const PAGE_ANIMATION_DURATION = 1000;
export default function CityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: city, isLoading, error } = useCityFindById(id);

  const bottomSheetIsOpen = useSharedValue(false);
  function toggleBottomSheet() {
    bottomSheetIsOpen.value = !bottomSheetIsOpen.value;
  }

  if (!city) {
    let Content;

    if (isLoading) {
      Content = <Text>carregando cidade...</Text>;
    } else if (error) {
      Content = <Text>Ocorreu um error ao carregar a cidade</Text>;
    } else {
      Content = null;
    }

    return (
      <Screen>
        <Box flex={1} justifyContent="center" alignItems="center">
          {Content}
        </Box>
      </Screen>
    );
  }

  return (
    <>
      <Screen style={{ paddingHorizontal: 0 }} scrollable>
        <Animated.View
          style={{ flex: 1 }}
          entering={FadeIn.duration(PAGE_ANIMATION_DURATION)}
        >
          <CityDetailsHeader
            id={city.id}
            coverImage={city.coverImage}
            categories={city.categories}
            isFavorite={city.isFavorite}
          />
          <CityDetailsInfo
            name={city.name}
            country={city.country}
            description={city.description}
          />
          <Divider paddingHorizontal="padding" />
          <CityDetailsTouristAttractions
            touristAttractions={city.touristAttractions}
          />

          <Divider paddingHorizontal="padding" />
          <Pressable onPress={toggleBottomSheet}>
            <CityDetailsMap location={city.location} />
          </Pressable>

          <Divider paddingHorizontal="padding" />
          <CityDetailsRelatedCities id={city.id} />
        </Animated.View>
      </Screen>
      {
        <Animated.View
          entering={FadeIn.duration(0).delay(PAGE_ANIMATION_DURATION)}
        >
          <BottomSheetMap
            location={city.location}
            isOpen={bottomSheetIsOpen}
            onPress={toggleBottomSheet}
          />
        </Animated.View>
      }
    </>
  );
}
