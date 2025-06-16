import { useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

type TextInputProps = {
  label: string;
  errorMessage?: string;
} & RNTextInputProps;

export function TextInput({
  label,
  errorMessage,
  ...texInputProps
}: TextInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box>
      <Text mb="s4" variant="text14Semibold">
        {label}
      </Text>
      <Box
        {...boxStyle}
        style={{
          borderColor: isFocused
            ? errorMessage
              ? colors.fbErrorSurface
              : colors.text
            : colors.gray1,
        }}
      >
        <RNTextInput
          {...texInputProps}
          placeholderTextColor={colors.gray2}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            ...textVariants.title16,
            color: colors.text,
            height: "100%",
            width: "100%",
            flexShrink: 1,
          }}
        />
      </Box>
      <Text marginVertical="s4" variant="text12" color="fbErrorSurface">
        {errorMessage}
      </Text>
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
