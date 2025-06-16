import { useCityFindById } from "@/src/features/city/operations/useCityFindById";
import {
  BottomSheetMap,
  CityDetailsHeader,
  CityDetailsInfo,
  CityDetailsMap,
  CityDetailsRelatedCities,
  CityDetailsTouristAttractions,
  Divider,
  Screen,
  Text,
} from "@ui";
import { useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function CityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: city } = useCityFindById(id);

  const bottomSheetIsOpen = useSharedValue(false);
  function toggleBottomSheet() {
    bottomSheetIsOpen.value = !bottomSheetIsOpen.value;
  }

  if (!city) {
    return (
      <Screen flex={1} justifyContent="center" alignItems="center">
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
    <>
      <Screen style={{ paddingHorizontal: 0 }} scrollable>
        <CityDetailsHeader
          id={city.id}
          coverImage={city.coverImage}
          categories={city.categories}
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
      </Screen>
      <BottomSheetMap
        location={city.location}
        isOpen={bottomSheetIsOpen}
        onPress={toggleBottomSheet}
      />
    </>
  );
}
