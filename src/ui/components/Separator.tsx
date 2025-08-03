import { Box } from "./Box";

export function Separator() {
  return (
    <Box marginVertical="s24" marginHorizontal="s16">
      <Box height={1} backgroundColor="gray2" style={{ width: "100%" }} />
    </Box>
  );
}
