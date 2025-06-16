import { useAuthSignIn } from "@/src/features/auth/operations/useAuthSignIn";
import { Button, Screen, Text, TextInput } from "@ui";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const { mutate: signIn, isLoading } = useAuthSignIn({
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
          testID="email-input"
          label="E-mail"
          placeholder="voce@exemplo.com"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          testID="password-input"
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

        <Link href="/sign-up" asChild>
          <Text mt="s24" alignSelf="center">
            Ainda não tem uma conta? Criar
          </Text>
        </Link>
      </SafeAreaView>
    </Screen>
  );
}
