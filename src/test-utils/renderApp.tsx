import { renderRouter } from "expo-router/testing-library";

import HomeScreen from "@/app/(protected)/(tabs)";
import TabLayout from "@/app/(protected)/(tabs)/_layout";
import ProtectedLayout from "@/app/(protected)/_layout";
import CityDetails from "@/app/(protected)/city-details/[id]";

import ExploreScreen from "@/app/(protected)/(tabs)/explore";
import ProfileScreen from "@/app/(protected)/(tabs)/profile";
import { AppStack } from "@/navigation/AppStack";
import { InMemoryRepositories } from "@/src/infra/repositories/inMemory";
import { Repositories } from "@/src/infra/repositories/Repositories";
import { RepositoryProvider } from "@/src/infra/repositories/RepositoryProvider";
import theme from "@/src/theme/theme";
import { ThemeProvider } from "@shopify/restyle";

import SignInScreen from "@/app/sign-in";
import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";
import { PropsWithChildren } from "react";
import { AuthContext, AuthProvider } from "../features/auth/AuthContext";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

function MockedAuthProvider({
  children,
  isSignedIn,
}: PropsWithChildren<{ isSignedIn?: boolean }>) {
  return (
    <AuthContext.Provider
      value={{
        isReady: true,
        isSignedIn: !!isSignedIn,
        signIn: () => {},
        signOut: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function renderApp(params?: {
  repositories?: DeepPartial<Repositories>;
  /**
   * Passing the `isSignedIn` will bypass the real auth flow
   * (context and state updates). So, sign in or sign out won't
   * switch the navigation stack. Use this property when you
   * don't care about the auth state and just want your test
   *  to start on Home Screen (`isSignedIn == true`)
   * or SignIn Screen (`isSignedIn == false`)
   */
  isSignedIn?: boolean;
}) {
  const finalRepo: Repositories = merge(
    cloneDeep(InMemoryRepositories),
    params?.repositories ?? {}
  );

  const FinalAuthProvider =
    params?.isSignedIn !== undefined ? MockedAuthProvider : AuthProvider;

  function Wrapper({ children }: React.PropsWithChildren) {
    return (
      <FinalAuthProvider isSignedIn={params?.isSignedIn}>
        <RepositoryProvider value={finalRepo}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RepositoryProvider>
      </FinalAuthProvider>
    );
  }

  renderRouter(
    {
      "/apps/_layout": () => <AppStack />,
      "(protected)/_layout": () => <ProtectedLayout />,
      "(protected)/(tabs)/_layout": () => <TabLayout />,
      "(protected)/(tabs)/index": () => <HomeScreen />,
      "(protected)/(tabs)/explore": () => <ExploreScreen />,
      "(protected)/(tabs)/profile": () => <ProfileScreen />,
      "(protected)/city-details/[id]": () => <CityDetails />,
      "sign-in": () => <SignInScreen />,
    },
    { wrapper: Wrapper, initialUrl: "/" }
  );
}
