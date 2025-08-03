import { AuthUser } from "@supabase/supabase-js";
import { supabase } from "./supabase";

async function getUserFromSession(): Promise<AuthUser> {
  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    throw new Error("invalid session");
  }
  return data.session.user;
}

export const supabaseHelpers = {
  getUserFromSession,
};
