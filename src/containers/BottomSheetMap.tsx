import { useWindowDimensions } from "react-native";
import MapView from "react-native-maps";
import { SharedValue } from "react-native-reanimated";
import { BottomSheet } from "../components/BottomSheet";

export function BottomSheetMap({
  isOpen,
  toggleSheet,
  latitude,
  longitude,
}: {
  isOpen: SharedValue<boolean>;
  toggleSheet: () => void;
  latitude: number;
  longitude: number;
}) {
  const { height } = useWindowDimensions();

  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <MapView
        style={{
          width: "100%",
          height: height * 0.8,
          borderRadius: 16,
        }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </BottomSheet>
  );
}
