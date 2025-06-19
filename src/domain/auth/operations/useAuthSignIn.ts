import { useFeedbackService } from "@/src/infra/feedbackService/FeedbackProvider";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useAuth } from "../AuthContext";
import { AuthUser } from "../AuthUser";

export function useAuthSignIn() {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();
  const { saveAuthUser } = useAuth();

  return useAppMutation<AuthUser, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.signIn(email, password),
    onSuccess: (authUser) => {
      saveAuthUser(authUser);
      feedbackService.send({
        type: "success",
        message: `signed in: ${authUser.email}`,
      });
    },
    onError: (error) => {
      feedbackService.send({ type: "error", message: "error on sign" });
    },
  });
}
