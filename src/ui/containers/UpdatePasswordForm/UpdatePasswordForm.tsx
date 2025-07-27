import { Box } from "../../components/Box";
import { Button } from "../../components/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import {
  updatePasswordSchema,
  UpdatePasswordSchema,
} from "./UpdatePasswordSchema";

type UpdatePasswordFormProps = {
  onSubmit: (data: UpdatePasswordSchema) => void;
};

export function UpdatePasswordForm({ onSubmit }: UpdatePasswordFormProps) {
  const { control, handleSubmit } = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
  });

  return (
    <Box>
      <Text mb="s16">
        Recomendamos usar uma combinação de letras, números e símbolos para
        maior proteção.
      </Text>

      <Controller
        control={control}
        name="currentPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="current-password-input"
            label="Senha Atual"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Senha atual"
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="newPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="new-password-input"
            label="Nova senha"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            placeholder="sua senha"
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmNewPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="confirm-new-password-input"
            label="Confirmar nova senha"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            placeholder="sua senha"
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        testID="submit-button"
        mt="s16"
        title="Atualizar"
        onPress={handleSubmit(onSubmit)}
      />
    </Box>
  );
}
