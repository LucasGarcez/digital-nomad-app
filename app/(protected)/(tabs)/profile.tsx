import { useAuthSignOut } from "@domain";
import { Box, Icon, Screen, Text } from "@ui";
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
