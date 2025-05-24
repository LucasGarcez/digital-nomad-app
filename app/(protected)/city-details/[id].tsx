import { Divider } from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { useCityDetails } from "@/src/data/useCityDetais";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import { Box } from "@/src/components/Box";
import { BottomSheetMap } from "@/src/containers/BottomSheetMap";
import { useSharedValue } from "react-native-reanimated";
import { CityDetailsHeader } from "../../../src/containers/CityDetailsHeader";
import { CityDetailsInfo } from "../../../src/containers/CityDetailsInfo";
import { CityDetailsMap } from "../../../src/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "../../../src/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "../../../src/containers/CityDetailsTouristAttractions";

export default function CityDetails() {
  const { id } = useLocalSearchParams();
  const city = useCityDetails(id as string);

  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  if (!city) {
    return (
      <Screen>
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
    <Box flex={1}>
      <Screen scrollable style={{ paddingHorizontal: 0 }}>
        <CityDetailsHeader
          id={city.id}
          coverImage={city.coverImage}
          categories={city.categories}
        />
        <CityDetailsInfo
          country={city.country}
          name={city.name}
          description={city.description}
        />

        <Divider marginHorizontal="padding" />
        <CityDetailsTouristAttractions
          touristAttractions={city.touristAttractions}
        />

        <Divider marginHorizontal="padding" />

        <CityDetailsMap onPress={toggleSheet} location={city.location} />

        <Divider marginHorizontal="padding" />
        <CityDetailsRelatedCities relatedCitiesIds={city.relatedCitiesIds} />
      </Screen>
      <BottomSheetMap
        isOpen={isOpen}
        toggleSheet={toggleSheet}
        latitude={city.location.latitude}
        longitude={city.location.longitude}
      />
    </Box>
  );
}
