import { Button } from "@/src/components/Button";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { TextInput } from "@/src/components/TextInput";
import { useAuthSignIn } from "@/src/features/auth/operations/useAuthSignIn";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const { mutate: signIn, isLoading } = useAuthSignIn({
    onSuccess: (user) => {
      console.log("success:", user.id);
    },
    onError: (error) => console.log("error:", error.message),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
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

        <Button
          mt="s20"
          title="Entrar"
          onPress={handleSignIn}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </Screen>
  );
}
