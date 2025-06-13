import { Box } from "@/src/components/Box";
import { Icon } from "@/src/components/Icon";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { useAuthSignOut } from "@/src/features/auth/operations/useAuthSignOut";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { mutate: signOut } = useAuthSignOut();

  return (
    <Screen>
      <SafeAreaView>
        <Text>Tela de perfil</Text>
        <Pressable onPress={signOut}>
          <Box mt="s48" flexDirection="row" alignItems="center">
            <Icon name="Logout" color="primary" />
            <Text color="primary">Sair</Text>
          </Box>
        </Pressable>
      </SafeAreaView>
    </Screen>
  );
}
