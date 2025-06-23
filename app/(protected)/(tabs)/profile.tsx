import { useAuthSignOut } from "@/src/domain/auth/operations/useAuthSignOut";
import { useAuthUpdateUser } from "@/src/domain/auth/operations/useAuthUpdateUser";
import { Box } from "@/src/ui/components/Box";
import { Button } from "@/src/ui/components/Button";
import { Icon } from "@/src/ui/components/Icon";
import { Screen } from "@/src/ui/components/Screen";
import { Text } from "@/src/ui/components/Text";
import { TextInput } from "@/src/ui/components/TextInput";
import { useState } from "react";
import { Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [fullname, setFullname] = useState("");
  const { mutate: signOut } = useAuthSignOut();
  const { mutate: updateUser } = useAuthUpdateUser();

  function handleUpdateUser() {
    if (fullname.length > 0) {
      updateUser({ fullname });
    }
  }

  return (
    <Screen>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={2}>
          <Text>Profile Screen</Text>

          <TextInput
            label="Nome completo"
            value={fullname}
            onChangeText={setFullname}
            placeholder="seu nome completo"
          />

          <Button title="Atualizar" onPress={handleUpdateUser} />
        </Box>

        <Box flex={1}>
          <Pressable onPress={signOut}>
            <Box mt="s56" flexDirection="row" alignItems="center">
              <Text>Sair</Text>
              <Icon name="Logout" color="primary" />
            </Box>
          </Pressable>
        </Box>
      </SafeAreaView>
    </Screen>
  );
}
