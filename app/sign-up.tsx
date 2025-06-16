import { toastService } from "@/src/infra/toast/ToastService";
import { useAuthSignUp } from "@domain";
import { Box, IconButton, Screen, SignUpForm } from "@ui";
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
