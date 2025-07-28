import { fireEvent, screen } from "@testing-library/react-native";
import { AuthUser } from "../domain/auth/AuthUser";
import { renderApp } from "../test-utils/renderApp";

const mockedAuthUser: AuthUser = {
  id: "1",
  email: "lucas@coffstack.com",
  fullname: "Lucas Garcez",
  createdAt: "2025-06-23T10:32:55.10671Z",
};

describe("integration: Profile", () => {
  it("should update the profile info", async () => {
    renderApp({
      isAuthenticated: true,
      repositories: {
        auth: {
          getUser: () => mockedAuthUser,
        },
      },
    });

    fireEvent.press(await screen.findByText("Perfil"));

    expect(await screen.findByText(/Informações da Conta/i)).toBeOnTheScreen();

    expect(await screen.findByText("Lucas Garcez")).toBeOnTheScreen();
    expect(await screen.findByText("lucas@coffstack.com")).toBeOnTheScreen();
    expect(await screen.findByText("junho 2025")).toBeOnTheScreen();

    fireEvent.press(screen.getByText(/editar perfil/i));
    expect(await screen.findByText(/Atualizar Perfil/i)).toBeOnTheScreen();

    fireEvent.changeText(
      screen.getByTestId("fullname-input"),
      "Lucas Coffstack"
    );

    fireEvent.press(screen.getByTestId("submit-button"));

    // verify toast message
    expect(
      await screen.findByText("perfil atualizado com sucesso")
    ).toBeOnTheScreen();

    expect(await screen.findByText(/Informações da Conta/i)).toBeOnTheScreen();
  });
});
