import { useAuthStore } from "@domain";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { authUser, isReady } = useAuthStore();

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
