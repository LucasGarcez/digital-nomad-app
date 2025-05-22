import { Divider } from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { useCityDetails } from "@/src/data/useCityDetais";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import { CityDetailsHeader } from "./components/CityDetailsHeader";
import { CityDetailsInfo } from "./components/CityDetailsInfo";
import { CityDetailsMap } from "./components/CityDetailsMap";
import { CityDetailsRelatedCities } from "./components/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "./components/CityDetailsTouristAttractions";

export default function CityDetails() {
  const { id } = useLocalSearchParams();
  const city = useCityDetails(id as string);

  if (!city) {
    return (
      <Screen>
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
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
      <CityDetailsMap location={city.location} />
      <CityDetailsRelatedCities relatedCitiesIds={city.relatedCitiesIds} />
    </Screen>
  );
}
