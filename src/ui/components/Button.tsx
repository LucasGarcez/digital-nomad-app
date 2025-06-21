import { ThemeColors } from "../theme/theme";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "./Box";
import { Text } from "./Text";

type ButtonVariant = "primary" | "secondary";

const buttonColors: Record<
  ButtonVariant,
  { backgroundColor: ThemeColors; textColor: ThemeColors }
> = {
  primary: {
    backgroundColor: "primary",
    textColor: "text",
  },
  secondary: {
    backgroundColor: "gray1",
    textColor: "text",
  },
};

type ButtonProps = TouchableOpacityBoxProps & {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
};

export function Button({
  title,
  onPress,
  variant = "primary",
  ...toProps
}: ButtonProps) {
  const buttonProps = buttonColors[variant];
  return (
    <TouchableOpacityBox
      {...toProps}
      onPress={onPress}
      backgroundColor={buttonProps.backgroundColor}
      borderRadius="default"
      padding="padding"
      justifyContent="center"
      alignItems="center"
    >
      <Text color={buttonProps.textColor}>{title}</Text>
    </TouchableOpacityBox>
  );
}
