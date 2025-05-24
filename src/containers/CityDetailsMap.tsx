import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { City } from "@/src/types";
import { Pressable } from "react-native";

import MapView from "react-native-maps";

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
// https://github.com/react-native-maps/react-native-maps?tab=readme-ov-file#my-map-is-blank

export function CityDetailsMap({
  location,
  onPress,
}: Pick<City, "location"> & { onPress: () => void }) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <Text variant="title22" mb="s16">
          Mapa
        </Text>

        <Pressable onPress={onPress}>
          <MapView
            style={{
              width: "100%",
              height: 200,
              borderRadius: 16,
            }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          />
        </Pressable>
      </Box>
    </Box>
  );
}
