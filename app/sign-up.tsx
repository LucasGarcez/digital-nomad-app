import { Box } from "@/src/components/Box";
import { IconButton } from "@/src/components/IconButton";
import { Screen } from "@/src/components/Screen";
import { SignUpForm } from "@/src/containers/SignUpForm/SignUpForm";
import { useAuthSignUp } from "@/src/features/auth/operations/useAuthSignUp";
import { toastService } from "@/src/infra/toast/ToastService";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();

  const { mutate: signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      router.back();
      toastService.show({
        type: "success",
        title: "cadastro realizado com sucesso!",
      });
    },
    onError: (error) => console.log("error:", error.message),
  });

  return (
    <Screen>
      <SafeAreaView>
        <Box mb="s32">
          <IconButton iconName="Chevron-left" onPress={router.back} />
        </Box>
        <SignUpForm signUp={signUp} isLoading={isLoading} />
      </SafeAreaView>
    </Screen>
  );
}
