import { fireEvent, renderRouter, screen } from "expo-router/testing-library";

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

import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// https://lodash.com/docs/#merge
// https://lodash.com/docs/#cloneDeep
function renderComponent(repo?: DeepPartial<Repositories>) {
  const finalRepo: Repositories = merge(
    cloneDeep(InMemoryRepositories),
    repo ?? {}
  );

  function Wrapper({ children }: React.PropsWithChildren) {
    return (
      <RepositoryProvider value={finalRepo}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </RepositoryProvider>
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
    },
    { wrapper: Wrapper, initialUrl: "/" }
  );
}

describe("integration: Home", () => {
  test("successfully", async () => {
    renderComponent();
    const element = await screen.findByText(/Rio de Janeiro/i);
    fireEvent.press(element);

    // multiple texts as Brasil
    const detailElement = await screen.findAllByText(/Brasil/i);
    expect(detailElement).toBeTruthy();
  });

  test("error on fetch cities", async () => {
    renderComponent({
      city: {
        findAll: async () => {
          return Promise.reject("servidor caiu :(");
        },
      },
    });

    expect(await screen.findByText(/servidor caiu/i)).toBeTruthy();
  });
});
