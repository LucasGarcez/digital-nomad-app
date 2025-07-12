import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import { renderApp } from "../test-utils/renderApp";

describe("integration: Home", () => {
  it("should display the city list and navigate to details when the city card is pressed", async () => {
    renderApp({ isAuthenticated: true });

    fireEvent.press(await screen.findByText("Rio de Janeiro"));

    expect(await screen.findByText("Pontos turísticos")).toBeOnTheScreen();

    fireEvent.press(screen.getByTestId("Chevron-left"));

    // Dubai city card
    expect(await screen.findByText("Dubai")).toBeOnTheScreen();

    fireEvent.changeText(screen.getByTestId("search-input"), "barcelona");

    await waitForElementToBeRemoved(() => screen.getByText("Dubai"));

    expect(screen.getByText("Barcelona")).toBeOnTheScreen();
    expect(screen.getByText("Espanha")).toBeOnTheScreen();
  });
});
