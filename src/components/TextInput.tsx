import { useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

type TextInputProps = Pick<
  RNTextInputProps,
  "value" | "onChangeText" | "placeholder" | "secureTextEntry" | "testID"
> & { label: string } & BoxProps;

export function TextInput({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry,
  testID,
  ...boxProps
}: TextInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box {...boxProps}>
      <Text mb="s4">{label}</Text>

      <Box
        {...boxStyle}
        style={{ borderColor: isFocused ? colors.text : colors.gray1 }}
      >
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.gray2}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          testID={testID}
          style={{
            ...textVariants.title16,
            color: colors.text,
            height: "100%",
            width: "100%",
            flexShrink: 1,
          }}
        />
      </Box>
    </Box>
  );
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  padding: "s8",
  justifyContent: "space-between",
  paddingLeft: "s16",
  height: 50,
  borderRadius: "default",
  borderWidth: 2,
};
