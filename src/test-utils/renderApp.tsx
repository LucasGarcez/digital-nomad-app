import HomeScreen from "@/app/(protected)/(tabs)";
import TabLayout from "@/app/(protected)/(tabs)/_layout";
import ExploreScreen from "@/app/(protected)/(tabs)/explore";
import ProfileScreen from "@/app/(protected)/(tabs)/profile";
import ProtectedLayout from "@/app/(protected)/_layout";
import CityDetails from "@/app/(protected)/city-details/[id]";
import SignInScreen from "@/app/sign-in";
import SignUpScreen from "@/app/sign-up";
import { renderRouter } from "expo-router/testing-library";
import { AppStack } from "../ui/navigation/AppStack";

import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";

import { ThemeProvider } from "@shopify/restyle";
import { AuthContext, AuthProvider } from "../domain/auth/AuthContext";
import { Repositories } from "../domain/Repositories";
import { Toast } from "../infra/feedbackService/adapters/Toast/Toast";
import { ToastFeedback } from "../infra/feedbackService/adapters/Toast/ToastFeedback";
import { FeedbackProvider } from "../infra/feedbackService/FeedbackProvider";
import { InMemoryRepository } from "../infra/repositories/adapters/inMemory";
import { RepositoryProvider } from "../infra/repositories/RepositoryProvider";
import { inMemoryStorage } from "../infra/storage/adapters/InMemoryStorage";
import { StorageProvider } from "../infra/storage/StorageContext";
import theme from "../ui/theme/theme";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

function MockedAuthProvider({ children }: React.PropsWithChildren) {
  const authUser = {
    email: "lucas@coffstack.com",
    id: "1",
    createdAt: "iso-date",
    fullname: "Lucas Garcez",
  };
  return (
    <AuthContext.Provider
      value={{
        isReady: true,
        authUser,
        saveAuthUser: async () => {},
        removeAuthUser: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function renderApp(params?: {
  repositories?: DeepPartial<Repositories>;
  /**
   * when it is `true` will render the Protected Stack, which means the user will land
   * in the Home screen. It uses a Mock Auth Provider.
   */
  isSignedIn?: boolean;
}) {
  function Wrapper({ children }: React.PropsWithChildren) {
    const finalRepo: Repositories = merge(
      cloneDeep(InMemoryRepository),
      params?.repositories ?? {}
    );

    const FinalAuthProvider = params?.isSignedIn
      ? MockedAuthProvider
      : AuthProvider;

    return (
      <StorageProvider storage={inMemoryStorage}>
        <FinalAuthProvider>
          <FeedbackProvider value={ToastFeedback}>
            <RepositoryProvider value={finalRepo}>
              <ThemeProvider theme={theme}>
                {children}
                <Toast />
              </ThemeProvider>
            </RepositoryProvider>
          </FeedbackProvider>
        </FinalAuthProvider>
      </StorageProvider>
    );
  }

  renderRouter(
    {
      _layout: () => <AppStack />,
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
