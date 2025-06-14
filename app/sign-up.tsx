import { Box } from "@/src/components/Box";
import { IconButton } from "@/src/components/IconButton";
import { Screen } from "@/src/components/Screen";
import { SignUpForm } from "@/src/containers/SignUpForm/SignUpForm";
import { useAuthSignUp } from "@/src/features/auth/operations/useAuthSignUp";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const { mutate: signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      console.log("success:");
    },
    onError: (error) => console.log("error:", error.message),
  });

  const router = useRouter();

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
