import { TouchableOpacityBox, TouchableOpacityBoxProps } from "./Box";
import { Text } from "./Text";

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityBoxProps;
export function Button({ title, onPress, ...boxProps }: ButtonProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      justifyContent="center"
      alignItems="center"
      padding="padding"
      backgroundColor="primary"
      borderRadius="default"
      {...boxProps}
    >
      <Text variant="text16">{title}</Text>
    </TouchableOpacityBox>
  );
}
