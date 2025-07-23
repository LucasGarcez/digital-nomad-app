import { AuthUser } from "@/src/domain/auth/AuthUser";
import { Box } from "@/src/ui/components/Box";
import { Button } from "@/src/ui/components/Button";
import { Text } from "@/src/ui/components/Text";
import { dateUtils } from "@/src/utils/dateUtils";

type ProfileHeaderProps = {
  authUser: AuthUser;
  navigateToEditProfile: () => void;
  navigateToEditPassword: () => void;
};

export function ProfileHeader({
  authUser,
  navigateToEditProfile,
  navigateToEditPassword,
}: ProfileHeaderProps) {
  return (
    <Box>
      <Text variant="title16" alignSelf="center" mb="s40">
        Perfil
      </Text>

      <Text variant="title16" mb="s16">
        Informações da Conta.
      </Text>
      <LineItem label="Nome" value={authUser.fullname} />
      <LineItem label="E-mail" value={authUser.email} />
      <LineItem
        label="Membro desde"
        value={dateUtils.getMonthAndYear(authUser.createdAt)}
      />

      <Box
        flexDirection="row"
        columnGap="s16"
        // backgroundColor="fbErrorBg"
        mt="s16"
      >
        <Box flex={1}>
          <Button
            title="Editar perfil"
            variant="secondary"
            onPress={navigateToEditProfile}
          />
        </Box>
        <Box flex={1}>
          <Button
            title="Alterar Senha"
            variant="secondary"
            onPress={navigateToEditPassword}
          />
        </Box>
      </Box>

      <Text variant="title16" mt="s24" mb="s16">
        Favoritos
      </Text>
    </Box>
  );
}

function LineItem({ label, value }: { label: string; value: string }) {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text variant="text14" color="gray2">
        {label}
      </Text>
      <Text variant="text14" color="text">
        {value}
      </Text>
    </Box>
  );
}
