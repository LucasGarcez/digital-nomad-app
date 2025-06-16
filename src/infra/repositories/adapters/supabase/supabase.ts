import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import { Database } from "./types";

function getSupabaseEnvs(): { url: string; anonKey: string } {
  if (process.env.JEST_WORKER_ID) {
    return {
      url: "http://localhost:54321",
      anonKey: "1234567890",
    };
  }

  const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("supabase env was not defined");
  }

  return {
    url,
    anonKey,
  };
}

const envs = getSupabaseEnvs();

export const supabase = createClient<Database>(envs.url, envs.anonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
