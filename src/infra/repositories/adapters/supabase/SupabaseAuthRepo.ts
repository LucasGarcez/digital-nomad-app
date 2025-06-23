import { AuthSignUpParams, IAuthRepo } from "@/src/domain/auth/IAuthRepo";

import { AuthUser } from "@/src/domain/auth/AuthUser";
import { supabase } from "./supabase";

async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

async function signUp({
  email,
  password,
  fullname,
}: AuthSignUpParams): Promise<void> {
  await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullname } },
  });
}

async function signIn(email: string, password: string): Promise<AuthUser> {
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (!data || !data.user) {
    throw new Error("auth error");
  }
  return {
    id: data.user?.id,
    email: data.user.email || "",
    // createdAt: data.user.created_at,
  };
}

async function sendResetPasswordEmail(email: string): Promise<void> {
  await supabase.auth.resetPasswordForEmail(email);
}

async function sessionChange(callback: (authUser: AuthUser | null) => void) {
  supabase.auth.onAuthStateChange((_event, session) => {
    // convert to Auth: session?.user.user_metadata
    // passs to callback: callback(user);
    // test by expiring the token
    // create de update profile screen with data and update to force session
  });
}

export const SupabaseAuthRepo: IAuthRepo = {
  signIn,
  signOut,
  signUp,
  sendResetPasswordEmail,
};
