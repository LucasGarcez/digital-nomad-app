import { useAuthStore } from "@/src/features/auth/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isSignedIn, isReady } = useAuthStore();

  if (!isReady) {
    return null;
  }

  if (!isSignedIn) {
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
