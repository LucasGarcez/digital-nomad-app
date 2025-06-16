import { ActivityIndicator } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "./Box";
import { Text } from "./Text";

type ButtonProps = {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
} & TouchableOpacityBoxProps;
export function Button({
  title,
  onPress,
  isLoading,
  ...boxProps
}: ButtonProps) {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacityBox
      disabled={isLoading}
      onPress={onPress}
      justifyContent="center"
      alignItems="center"
      padding="padding"
      backgroundColor="primary"
      borderRadius="default"
      {...boxProps}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <Text variant="text16">{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
