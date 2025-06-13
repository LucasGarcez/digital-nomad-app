import { fireEvent, renderRouter, screen } from "expo-router/testing-library";

import HomeScreen from "@/app/(protected)/(tabs)";
import TabLayout from "@/app/(protected)/(tabs)/_layout";
import ProtectedLayout from "@/app/(protected)/_layout";
import CityDetails from "@/app/(protected)/city-details/[id]";

import ExploreScreen from "@/app/(protected)/(tabs)/explore";
import ProfileScreen from "@/app/(protected)/(tabs)/profile";
import { AppStack } from "@/navigation/AppStack";
import { InMemoryRepositories } from "@/src/infra/repositories/inMemory";
import { RepositoryProvider } from "@/src/infra/repositories/RepositoryProvider";
import theme from "@/src/theme/theme";
import { ThemeProvider } from "@shopify/restyle";

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <RepositoryProvider value={InMemoryRepositories}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RepositoryProvider>
  );
}

function renderComponent() {
  renderRouter(
    {
      "/apps/_layout": () => <AppStack />,
      "(protected)/_layout": () => <ProtectedLayout />,
      "(protected)/(tabs)/_layout": () => <TabLayout />,
      "(protected)/(tabs)/index": () => <HomeScreen />,
      "(protected)/(tabs)/explore": () => <ExploreScreen />,
      "(protected)/(tabs)/profile": () => <ProfileScreen />,
      "(protected)/city-details/[id]": () => <CityDetails />,
    },
    { wrapper: Wrapper, initialUrl: "/" }
  );
}

test("integration:Home", async () => {
  renderComponent();
  const element = await screen.findByText(/Rio de Janeiro/i);
  fireEvent.press(element);

  // multiple texts as Brasil
  const detailElement = await screen.findAllByText(/Brasil/i);
  expect(detailElement).toBeTruthy();
});
