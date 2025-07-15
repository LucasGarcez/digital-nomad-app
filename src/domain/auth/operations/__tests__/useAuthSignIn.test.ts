import { act, renderHook } from "@testing-library/react-native";
import { AuthUser } from "../../AuthUser";
import { useAuthSignIn } from "../useAuthSignIn";

const mockSignIn = jest.fn();
const mockSendFeedback = jest.fn();
const mockSaveAuthUser = jest.fn();

jest.mock("@/src/infra/repositories/RepositoryProvider", () => ({
  useRepository: () => {
    return {
      auth: {
        signIn: mockSignIn,
      },
    };
  },
}));

jest.mock("@/src/infra/feedbackService/FeedbackProvider", () => ({
  useFeedbackService: () => ({ send: mockSendFeedback }),
}));

jest.mock("../../AuthContext", () => ({
  useAuth: () => ({ saveAuthUser: mockSaveAuthUser }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("useAuthSignIn()", () => {
  it("calls saveAuthUser and sends success feedback on successful sign in", async () => {
    const user: AuthUser = {
      id: "1",
      email: "lucas@coffstack.com",
      fullname: "Lucas Garcez",
    };
    mockSignIn.mockResolvedValueOnce(user);

    const { result } = renderHook(() => useAuthSignIn());

    expect(result.current.isLoading).toBe(false);

    await act(async () => {
      await result.current.mutate({
        email: "lucas@coffstack.com",
        password: "password",
      });
    });

    expect(mockSignIn).toHaveBeenCalledWith("lucas@coffstack.com", "password");
    expect(mockSaveAuthUser).toHaveBeenCalledWith(user);
    expect(mockSendFeedback).toHaveBeenCalledWith({
      type: "success",
      message: `signed in: ${user.email}`,
    });
  });

  it("sends an error feedback on failed sign in", async () => {
    const error = new Error("invalid credentials");
    mockSignIn.mockRejectedValueOnce(error);

    const { result } = renderHook(() => useAuthSignIn());

    await act(async () => {
      await result.current.mutate({
        email: "lucas@coffstack.com",
        password: "password",
      });
    });

    expect(mockSendFeedback).toHaveBeenCalledWith({
      type: "error",
      message: "error ao fazer login",
      description: "invalid credentials",
    });
  });
});
