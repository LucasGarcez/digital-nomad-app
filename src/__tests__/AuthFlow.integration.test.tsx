import { fireEvent, screen } from "@testing-library/react-native";
import { renderApp } from "../test-utils/renderApp";

describe("integration: Auth Flow", () => {
  test("the user can sign-in and sign-out", async () => {
    renderApp();

    // waiting for screen to be rendered
    expect(await screen.findByText("Bem-vindo"));

    // type email and password
    fireEvent.changeText(
      screen.getByPlaceholderText("seu email"),
      "lucas@coffstack.com"
    );

    fireEvent.changeText(
      screen.getByPlaceholderText("digite sua senha"),
      "12345678"
    );

    // press the sign-in button
    fireEvent.press(screen.getByText(/entrar/i));

    // verify toast message
    expect(
      await screen.findByText("signed in: lucas@coffstack.com")
    ).toBeOnTheScreen();

    // verify if home screen was rendered
    expect(await screen.findByText("Rio de Janeiro")).toBeOnTheScreen();
    expect(screen.getByText("Bangkok")).toBeOnTheScreen();

    // press the profile tab
    fireEvent.press(screen.getByText("Perfil"));

    // press the sign-out button
    fireEvent.press(screen.getByText("Sair"));

    // verify if user is in the sign-in screen
    expect(await screen.findByText("Bem-vindo"));
  });
});
