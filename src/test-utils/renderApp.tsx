import { renderRouter } from "expo-router/testing-library";

import HomeScreen from "@/app/(protected)/(tabs)";
import TabLayout from "@/app/(protected)/(tabs)/_layout";
import ExploreScreen from "@/app/(protected)/(tabs)/explore";
import ProfileScreen from "@/app/(protected)/(tabs)/profile";
import ProtectedLayout from "@/app/(protected)/_layout";
import CityDetails from "@/app/(protected)/city-details/[id]";
import {
  FeedbackProvider,
  InMemoryRepositories,
  inMemoryStorage,
  RepositoryProvider,
  StorageProvider,
  Toast,
  ToastFeedbackService,
} from "@infra";

import { ThemeProvider } from "@shopify/restyle";
import { AppStack, theme } from "@ui";

import SignInScreen from "@/app/sign-in";
import SignUpScreen from "@/app/sign-up";
import { AuthContext, AuthProvider, Repositories } from "@domain";
import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";
import { PropsWithChildren } from "react";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

function MockedAuthProvider({
  children,
  isSignedIn,
}: PropsWithChildren<{ isSignedIn?: boolean }>) {
  const authUser = isSignedIn
    ? {
        email: "lucas@coffstack.com",
        id: "1",
        createdAt: "iso-date",
      }
    : null;
  return (
    <AuthContext.Provider
      value={{
        isReady: true,
        authUser,
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
      <FeedbackProvider feedbackService={ToastFeedbackService}>
        <StorageProvider storage={inMemoryStorage}>
          <FinalAuthProvider isSignedIn={params?.isSignedIn}>
            <RepositoryProvider value={finalRepo}>
              <ThemeProvider theme={theme}>
                <>
                  {children}
                  <Toast />
                </>
              </ThemeProvider>
            </RepositoryProvider>
          </FinalAuthProvider>
        </StorageProvider>
      </FeedbackProvider>
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
      "sign-up": () => <SignUpScreen />,
    },
    { wrapper: Wrapper, initialUrl: "/" }
  );
}
