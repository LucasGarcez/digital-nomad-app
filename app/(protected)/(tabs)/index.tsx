import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { useAppTheme } from "@/src/theme/useAppTheme";

export default function HomeScreen() {
  const { colors } = useAppTheme();
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Text marginTop="xl" color="text">
        Home Screen {colors.text}
      </Text>
    </Box>
  );
}
