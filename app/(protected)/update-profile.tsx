import { useAuthUpdateProfile } from "@/src/domain/auth/operations/useAuthUpdateProfile";
import { Screen } from "@/src/ui/components/Screen";
import { Text } from "@/src/ui/components/Text";
import { Header } from "@/src/ui/containers/Header";
import { UpdateProfileForm } from "@/src/ui/containers/UpdateProfileForm/UpdateProfileForm";
import { UpdateProfileSchema } from "@/src/ui/containers/UpdateProfileForm/UpdateProfileSchema";
import { router, useLocalSearchParams } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

export default function UpdateProfileScreen() {
  const searchParams = useLocalSearchParams<{
    fullname: string;
    email: string;
  }>();

  const { mutate: updateProfile } = useAuthUpdateProfile({
    onSuccess: () => {
      router.back();
    },
  });

  function handleUpdateProfile(data: UpdateProfileSchema) {
    updateProfile({
      email: data.email,
      fullname: data.fullname,
    });
    //
  }
  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar Perfil" />
        <Text mb="s16">
          Mantenha suas informações atualizadas para uma melhor experiência
        </Text>
        <UpdateProfileForm
          onSubmit={handleUpdateProfile}
          defaultValues={{
            email: searchParams.email,
            fullname: searchParams.fullname,
          }}
        />
      </SafeAreaView>
    </Screen>
  );
}
