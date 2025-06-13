import { fireEvent, renderRouter, screen } from "expo-router/testing-library";

import HomeScreen from "@/app/(protected)/(tabs)";
import CityDetails from "@/app/(protected)/city-details/[id]";
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
      index: () => <HomeScreen />,
      "city-details/[id]": () => <CityDetails />,
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
