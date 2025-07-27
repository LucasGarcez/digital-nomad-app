import { z } from "zod";

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string({ message: "campo obrigatório" }),
    newPassword: z
      .string({ message: "campo obrigatório" })
      .min(6, "no mínimo 6 caracteres"),
    confirmNewPassword: z
      .string({ message: "campo obrigatório" })
      .min(6, "no mínimo 6 caracteres"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
