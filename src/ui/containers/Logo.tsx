import { Image } from "react-native";

export function Logo() {
  return (
    <Image
      source={require("../../../assets/images/logo.png")}
      style={{
        width: 150,
        height: 60,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 60,
      }}
    />
  );
}
