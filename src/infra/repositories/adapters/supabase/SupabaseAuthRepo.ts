import { AuthUser } from "@/src/domain/auth/AuthUser";
import { AuthSignUpParams, IAuthRepo } from "@/src/domain/auth/IAuthRepo";
import { supabase } from "./supabase";
import { supabaseAdapter } from "./supabaseAdapter";

export class SupabaseAuthRepo implements IAuthRepo {
  signIn = async (email: string, password: string): Promise<AuthUser> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error("user not found");
    }
    return supabaseAdapter.toAuthUser(data.user);
  };
  signUp = async (params: AuthSignUpParams): Promise<void> => {
    const { error } = await supabase.auth.signUp({
      email: params.email,
      password: params.password,
      options: { data: { fullname: params.fullname } },
    });
    if (error) {
      throw new Error("erro on register user");
    }
    return;
  };

  signOut = async (): Promise<void> => {
    await supabase.auth.signOut();
  };
  sendResetPasswordEmail = async (email: string): Promise<void> => {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.EXPO_PUBLIC_WEB_URL}/reset-password`,
    });
  };
}
