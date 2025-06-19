import { Button } from "@/src/ui/components/Button";
import { Screen } from "@/src/ui/components/Screen";
import { Header } from "@/src/ui/containers/Header";
import { Logo } from "@/src/ui/containers/Logo";

import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen() {
  function handleResetPassword() {
    //
  }
  return (
    <Screen>
      <SafeAreaView>
        <Header title="Recuperar Senha" />
        <Button title="Enviar link" onPress={handleResetPassword} />
        <Logo />
      </SafeAreaView>
    </Screen>
  );
}
