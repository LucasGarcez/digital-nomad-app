import { useAuth } from "@/src/domain/auth/AuthContext";
import { supabase } from "@/src/infra/repositories/adapters/supabase/supabase";
import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function ProtectedLayout() {
  const { isReady, authUser } = useAuth();

  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!isReady) {
    return null;
  }

  if (!authUser) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
