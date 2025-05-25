import { Divider } from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { CityDetailsHeader } from "@/src/containers/CityDetailsHeader";
import { CityDetailsInfo } from "@/src/containers/CityDetailsInfo";
import { CityDetailsMap } from "@/src/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "@/src/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "@/src/containers/CityDetailsTouristAttractions";
import { useCityDetails } from "@/src/data/useCityDetails";
import { useLocalSearchParams } from "expo-router";

export default function CityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const city = useCityDetails(id);

  if (!city) {
    return (
      <Screen flex={1} justifyContent="center" alignItems="center">
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
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
      <CityDetailsMap />

      <Divider paddingHorizontal="padding" />
      <CityDetailsRelatedCities />
    </Screen>
  );
}
