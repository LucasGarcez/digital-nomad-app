import { z } from "zod";

import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

import { Controller, useForm } from "react-hook-form";
import { AuthSignUpParams } from "../features/auth/AuthRepository";

export const signUpSchema = z.object({
  fullname: z.string().min(5, "nome muito curto"),
  email: z.string().email("email inválido"),
  password: z.string().min(6, "no mínimo 6 caracteres"),
  confirmPassword: z.string().min(6, "no mínimo 6 caracteres"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

type SignUpFormProps = {
  isLoading: boolean;
  signUp: (params: AuthSignUpParams) => void;
};

export function SignUpForm({ signUp, isLoading }: SignUpFormProps) {
  const { control, handleSubmit } = useForm<SignUpSchema>();

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }
  return (
    <Box>
      <Controller
        control={control}
        name="fullname"
        render={({ field }) => (
          <TextInput
            testID="fullname-input"
            label="Nome completo"
            placeholder="Seu nome"
            value={field.value}
            onChangeText={field.onChange}
            mb="s16"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput
            testID="email-input"
            label="E-mail"
            placeholder="voce@exemplo.com"
            value={field.value}
            onChangeText={field.onChange}
            mb="s16"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput
            testID="password-input"
            label="Senha"
            placeholder="••••••••"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            mb="s16"
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
