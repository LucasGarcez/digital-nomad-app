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

import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import Toast from "react-native-toast-message";
import { AuthProvider } from "../domain/auth/AuthContext";
import { ToastFeedback } from "../infra/feedbackService/adapters/Toast/ToastFeedback";
import { FeedbackProvider } from "../infra/feedbackService/FeedbackProvider";
import { InMemoryRepository } from "../infra/repositories/adapters/inMemory";
import { RepositoryProvider } from "../infra/repositories/RepositoryProvider";
import { inMemoryStorage } from "../infra/storage/adapters/InMemoryStorage";
import { StorageProvider } from "../infra/storage/StorageContext";
import theme from "../ui/theme/theme";

export function renderApp() {
  function Wrapper({ children }: React.PropsWithChildren) {
    return (
      <FeedbackProvider value={ToastFeedback}>
        <StorageProvider storage={inMemoryStorage}>
          <AuthProvider>
            <RepositoryProvider value={InMemoryRepository}>
              <ThemeProvider theme={theme}>
                <>
                  {children}
                  <Toast />
                </>
              </ThemeProvider>
            </RepositoryProvider>
          </AuthProvider>
        </StorageProvider>
      </FeedbackProvider>
    );
  }

  renderRouter(
    {
      "/app/_layout": () => <AppStack />,
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
