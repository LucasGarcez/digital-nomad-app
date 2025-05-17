import { Redirect, Stack } from "expo-router";

const isSignedIn = false;
export default function ProtectedLayout() {
  if (isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tab)" />
    </Stack>
  );
}
