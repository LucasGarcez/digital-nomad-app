import { z } from "zod";

export const signUpSchema = z
  .object({
    fullname: z
      .string({ message: "campo obrigatório" })
      .min(5, "nome muito curto"),
    email: z.string({ message: "campo obrigatório" }).email("email inválido"),
    password: z
      .string({ message: "campo obrigatório" })
      .min(6, "no mínimo 6 caracteres"),
    confirmPassword: z
      .string({ message: "campo obrigatório" })
      .min(6, "no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
