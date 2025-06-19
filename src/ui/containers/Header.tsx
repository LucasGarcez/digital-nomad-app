import { router } from "expo-router";
import { Box } from "../components/Box";
import { IconButton } from "../components/IconButton";
import { Text } from "../components/Text";

type HeaderProps = {
  title: string;
};
export function Header({ title }: HeaderProps) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="s56"
    >
      <IconButton iconName="Chevron-left" onPress={router.back} />
      <Text variant="title16">{title}</Text>
    </Box>
  );
}
