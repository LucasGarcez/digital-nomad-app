import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { AuthSignUpParams } from "../../../features/auth/AuthRepository";
import { signUpSchema, SignUpSchema } from "./SignUpSchema";

type SignUpFormProps = {
  isLoading: boolean;
  signUp: (params: AuthSignUpParams) => void;
};

export function SignUpForm({ signUp, isLoading }: SignUpFormProps) {
  const { control, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }
  return (
    <Box>
      <Controller
        control={control}
        name="fullname"
        render={({ field, fieldState }) => (
          <TextInput
            testID="fullname-input"
            autoCapitalize="words"
            label="Nome completo"
            placeholder="Seu nome"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <TextInput
            autoCapitalize="none"
            testID="email-input"
            label="E-mail"
            placeholder="voce@exemplo.com"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <TextInput
            testID="password-input"
            label="Senha"
            placeholder="••••••••"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="confirm-password-input"
            label="Confirmar Senha"
            placeholder="••••••••"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        mt="s20"
        title="Criar conta"
        onPress={handleSubmit(submitForm)}
        isLoading={isLoading}
      />
    </Box>
  );
}
