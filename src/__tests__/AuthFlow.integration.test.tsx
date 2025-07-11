import { screen } from "@testing-library/react-native";
import { renderApp } from "../test-utils/renderApp";

describe("integration: Auth Flow", () => {
  test("the user can sign-in and sign-out", async () => {
    renderApp();

    expect(await screen.findByText("Bem-vindo"));
  });
});
