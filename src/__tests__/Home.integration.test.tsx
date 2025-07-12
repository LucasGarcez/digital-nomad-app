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

  it("should display an error message when city list does not load", async () => {
    renderApp({
      isAuthenticated: true,
      repositories: {
        city: {
          findAll: async () => {
            return Promise.reject(new Error("server is down!"));
          },
        },
      },
    });

    expect(
      await screen.findByText(/erro ao carregar cidades/i)
    ).toBeOnTheScreen();
    expect(await screen.findByText(/server is down!/i)).toBeOnTheScreen();
  });

  it("should display an empty message when city list is empty", async () => {
    renderApp({
      isAuthenticated: true,
      repositories: {
        city: {
          findAll: async () => {
            return [];
          },
        },
      },
    });

    expect(await screen.findByText(/carregando cidades/i)).toBeOnTheScreen();
    expect(
      await screen.findByText(/não há cidades no momento/i)
    ).toBeOnTheScreen();
  });
});
