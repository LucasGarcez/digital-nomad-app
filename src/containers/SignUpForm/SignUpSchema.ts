import { z } from "zod";

export const signUpSchema = z.object({
  fullname: z.string().min(5, "nome muito curto"),
  email: z.string().email("email inválido"),
  password: z.string().min(6, "no mínimo 6 caracteres"),
  // confirmPassword: z.string().min(6, "no mínimo 6 caracteres"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
