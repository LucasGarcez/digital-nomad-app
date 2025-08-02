import { Box } from "./Box";

export function Separator() {
  return (
    <Box paddingHorizontal="s16">
      <Box
        height={1}
        marginVertical="s24"
        backgroundColor="gray2"
        style={{ width: "100%" }}
      />
    </Box>
  );
}
