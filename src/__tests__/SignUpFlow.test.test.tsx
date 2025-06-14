import { fireEvent, screen } from "expo-router/testing-library";

import { renderApp } from "../test-utils/renderApp";

describe("integration: SignUp Flow", () => {
  test("the user can sign-up", async () => {
    renderApp();

    // wait screen to be loaded and navigate to sign-up
    expect(await screen.findByText("Bem-vindo"));
    fireEvent.press(screen.getByText(/Criar/i));

    // fill form with valid data
    fireEvent.changeText(screen.getByTestId("fullname-input"), "John Doe");
    fireEvent.changeText(
      screen.getByTestId("email-input"),
      "lucas@coffstack.com"
    );
    fireEvent.changeText(screen.getByTestId("password-input"), "123456");
    fireEvent.changeText(
      screen.getByTestId("confirm-password-input"),
      "123456"
    );

    // submit form
    fireEvent.press(screen.getByText(/Criar conta/i));

    // wait for toast to be shown
    expect(await screen.findByText(/cadastro realizado com sucesso/i));

    //it should navigate to sign-in screen
    expect(await screen.findByText(/Bem-vindo/i));
  });
});
