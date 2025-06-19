import { City } from "@/src/domain/city/City";
import MapView from "react-native-maps";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { useAppTheme } from "../theme/useAppTheme";

type CityDetailsMapProps = Pick<City, "location">;

export function CityDetailsMap({ location }: CityDetailsMapProps) {
  const { borderRadii } = useAppTheme();
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">
        Mapa
      </Text>
      <MapView
        style={{
          width: "100%",
          height: 200,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Box>
  );
}
