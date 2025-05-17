import { ImageBackground } from "react-native";
import { CityPreview } from "../types";
import { Text } from "./Text";

type CityCardProps = {
  cityPreview: CityPreview;
};

export function CityCard({ cityPreview }: CityCardProps) {
  return (
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: 200, height: 200 }}
    >
      <Text>{cityPreview.name}</Text>
      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  );
}
