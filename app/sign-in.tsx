import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Button } from "@/src/ui/components/Button";
import { Screen } from "@/src/ui/components/Screen";
import { Text } from "@/src/ui/components/Text";
import { TextInput } from "@/src/ui/components/TextInput";
import { useState } from "react";
import { Image } from "react-native";

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
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 150,
            height: 60,
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 60,
          }}
        />
        <Text variant="title22" alignSelf="center" mb="s16">
          Bem-vindo
        </Text>
        <TextInput
          label="E-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholder="seu email"
        />
        <TextInput
          // errorMessage="mensagem de erro"
          label="Senha"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="digite sua senha"
        />
        <Text mb="s16" alignSelf="flex-end" variant="text14" color="primary">
          Esqueceu sua senha
        </Text>
        <Button title="Entrar" onPress={handleSignIn} />
        <Text alignSelf="center" mt="s16" color="gray2">
          Ainda não tem uma conta?{" "}
          <Text variant="title14" color="primary">
            Criar
          </Text>
        </Text>
      </SafeAreaView>
    </Screen>
  );
}
