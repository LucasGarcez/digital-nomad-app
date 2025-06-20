import { Screen } from "@/src/ui/components/Screen";
import { Header } from "@/src/ui/containers/Header";
import { Logo } from "@/src/ui/containers/Logo";
import { SignUpForm } from "@/src/ui/containers/SignUpForm/SignUpForm";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  function handleSignUp() {
    //
  }

  return (
    <Screen>
      <SafeAreaView>
        <Header title="Criar conta" />
        <SignUpForm onSubmit={handleSignUp} />
        <Logo />
      </SafeAreaView>
    </Screen>
  );
}
