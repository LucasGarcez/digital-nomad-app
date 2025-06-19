import { Button } from "@/src/ui/components/Button";
import { Screen } from "@/src/ui/components/Screen";
import { Header } from "@/src/ui/containers/Header";
import { Logo } from "@/src/ui/containers/Logo";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  function handleSignUp() {
    //
  }
  return (
    <Screen>
      <SafeAreaView>
        <Header title="Criar conta" />
        <Button title="Criar conta" onPress={handleSignUp} />
        <Logo />
      </SafeAreaView>
    </Screen>
  );
}
