import { renderComponent } from "@/src/test-utils/renderComponent";
import { screen } from "@testing-library/react-native";

import { CityCard } from "../CityCard";

describe("<CityCard />", () => {
  it("should render the component", () => {
    renderComponent(
      <CityCard
        cityPreview={{
          id: "1",
          country: "Brasil",
          coverImage: "fake-url",
          name: "Bangkok",
        }}
      />
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
  it("should display the city country and favorite icon", () => {
    renderComponent(
      <CityCard
        cityPreview={{
          id: "1",
          country: "Brasil",
          coverImage: "fake-url",
          name: "Rio de Janeiro",
        }}
      />
    );

    expect(screen.getByText("Brasil")).toBeOnTheScreen();
    expect(screen.getByTestId("Favorite-outline")).toBeOnTheScreen();
  });
});
