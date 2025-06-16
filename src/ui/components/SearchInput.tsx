import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { IconButton } from "./IconButton";

type SearchInputProps = {} & Pick<
  TextInputProps,
  "value" | "onChangeText" | "placeholder"
>;
export function SearchInput({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  function onPressIconButton() {
    if (value!.length > 0) {
      onChangeText?.("");
    }
  }

  return (
    <Box
      {...boxStyle}
      style={{ borderColor: isFocused ? colors.primary : colors.gray1 }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...textVariants.title16,
          color: colors.text,
          //   backgroundColor: "green",
          height: "100%",
          width: "100%",
          flexShrink: 1,
        }}
      />
      <IconButton
        iconName={value!.length > 0 ? "Close" : "Search-outline"}
        onPress={onPressIconButton}
      />
    </Box>
  );
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  padding: "s8",
  justifyContent: "space-between",
  backgroundColor: "gray1",
  paddingLeft: "s16",
  height: 70,
  borderRadius: "rounded",
  borderWidth: 2,
};
