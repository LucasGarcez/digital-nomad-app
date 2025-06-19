import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Screen } from "@/src/ui/components/Screen";
import { TextInput } from "@/src/ui/components/TextInput";
import { useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signIng } = useAuthSignIn();

  function handleSignIn() {
    signIng({ email, password });
  }
  return (
    <Screen>
      <SafeAreaView>
        <TextInput
          label="E-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholder="seu email"
        />
        <TextInput
          errorMessage="mensagem de erro"
          label="Senha"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="digite sua senha"
        />
        <Button title="Entrar" onPress={handleSignIn} />
      </SafeAreaView>
    </Screen>
  );
}
