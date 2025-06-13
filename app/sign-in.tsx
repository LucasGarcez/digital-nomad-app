import { Button } from "@/src/components/Button";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { TextInput } from "@/src/components/TextInput";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    // todo
  }

  return (
    <Screen>
      <SafeAreaView>
        <Text mb="s48">Bem-vindo</Text>
        <TextInput
          label="E-mail"
          placeholder="voce@exemplo.com"
          value={email}
          onChangeText={setEmail}
          mb="s16"
        />
        <TextInput
          label="Senha"
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button mt="s20" title="Entrar" onPress={handleSignIn} />
      </SafeAreaView>
    </Screen>
  );
}
