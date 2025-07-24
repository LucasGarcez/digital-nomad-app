import { Pressable } from "react-native";
import { Box } from "../../components/Box";
import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

type ProfileFooterProps = {
  signOut: (variables: unknown) => void;
};
export function ProfileFooter({ signOut }: ProfileFooterProps) {
  return (
    <Pressable onPress={signOut}>
      <Box flexDirection="row" alignSelf="center" alignItems="center" mt="s16">
        <Icon name="Logout" color="fbErrorSurface" />
        <Text color="fbErrorSurface">Sair</Text>
      </Box>
    </Pressable>
  );
}
