import { renderComponent } from "@/src/test-utils/renderComponent";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import { SignUpForm } from "./SignUpForm";

describe("<SignUpForm />", () => {
  it("should submit the form when full field", async () => {
    const signUpMock = jest.fn();
    renderComponent(<SignUpForm signUp={signUpMock} isLoading={false} />);

    fireEvent.changeText(screen.getByTestId("fullname-input"), "Lucas Garcez");

    fireEvent.changeText(
      screen.getByTestId("email-input"),
      "lucas@coffstack.com"
    );

    fireEvent.changeText(screen.getByTestId("password-input"), "12345678");
    fireEvent.changeText(
      screen.getByTestId("confirm-password-input"),
      "12345678"
    );

    fireEvent.press(screen.getByText(/Criar conta/i));

    await waitFor(() =>
      // using objectContaining because we don't care about the "confirmPassword"
      expect(signUpMock).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "lucas@coffstack.com",
          fullname: "Lucas Garcez",
          password: "12345678",
        })
      )
    );
  });
});
