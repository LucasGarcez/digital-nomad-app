import { fireEvent, screen } from "expo-router/testing-library";
import { renderApp } from "../test-utils/renderApp";

describe("integration: Auth Flow", () => {
  test("the user can sign-in and sign-out", async () => {
    renderApp();

    expect(await screen.findByText("Bem-vindo"));

    //Sign In Flow
    fireEvent.changeText(
      screen.getByTestId("email-input"),
      "lucas@coffstack.com"
    );
    fireEvent.changeText(screen.getByTestId("password-input"), "123456");

    fireEvent.press(screen.getByText(/Entrar/i));

    expect(await screen.findByText(/Rio de Janeiro/i));

    // Sign Out flow
    fireEvent.press(screen.getByText(/Perfil/i));

    fireEvent.press(screen.getByText(/Sair/));

    expect(await screen.findByText("Bem-vindo"));
  });
});
