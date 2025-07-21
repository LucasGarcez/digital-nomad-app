import { useAuthSignOut } from "@/src/domain/auth/operations/useAuthSignOut";
import { Box } from "@/src/ui/components/Box";
import { Icon } from "@/src/ui/components/Icon";
import { Screen } from "@/src/ui/components/Screen";
import { Text } from "@/src/ui/components/Text";
import { CityFavoriteList } from "@/src/ui/containers/CityFavoriteList/CityFavoriteList";
import { Pressable } from "react-native";

export default function ProfileScreen() {
  const { mutate: signOut } = useAuthSignOut();

  return (
    <Screen>
      <CityFavoriteList
        // ListHeaderComponent={<Header title="Perfil" canGoBack={false} />}
        ListFooterComponent={
          <Pressable onPress={signOut}>
            <Box flexDirection="row" alignItems="center">
              <Text>Sair</Text>
              <Icon name="Logout" color="primary" />
            </Box>
          </Pressable>
        }
      />
    </Screen>
  );
}
