import { Box } from "../../components/Box";
import { Button } from "../../components/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, DefaultValues, useForm } from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import {
  UpdateProfileSchema,
  updateProfileSchema,
} from "./UpdateProfileSchema";

type UpdateProfileFormProps = {
  onSubmit: (data: UpdateProfileSchema) => void;
  defaultValues: DefaultValues<UpdateProfileSchema>;
};

export function UpdateProfileForm({
  onSubmit,
  defaultValues,
}: UpdateProfileFormProps) {
  const { control, handleSubmit } = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues,
  });

  return (
    <Box>
      <Controller
        control={control}
        name="fullname"
        render={({ field, fieldState }) => (
          <TextInput
            testID="fullname-input"
            label="Nome completo"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="seu nome completo"
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <TextInput
            testID="email-input"
            label="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="seu email"
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
