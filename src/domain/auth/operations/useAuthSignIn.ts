import { useFeedbackService } from "@/src/infra/feedbackService/FeedbackProvider";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../AuthContext";
import { AuthUser } from "../AuthUser";

export function useAuthSignIn() {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();
  const { saveAuthUser } = useAuth();

  const { mutate, error, isPending } = useMutation<
    AuthUser,
    unknown,
    { email: string; password: string }
  >({
    mutationFn: ({ email, password }) => auth.signIn(email, password),
    onSuccess: (authUser) => {
      saveAuthUser(authUser);
      feedbackService.send({
        type: "success",
        message: `signed in: ${authUser.email}`,
      });
    },
    onError: (error) => {
      feedbackService.send({
        type: "error",
        message: "error ao fazer login",
        description: error.message,
      });
    },
  });

  return {
    mutate,
    error,
    isPending,
  };

  // return useAppMutation<AuthUser, { email: string; password: string }>({
  //   mutateFn: ({ email, password }) => auth.signIn(email, password),
  //   onSuccess: (authUser) => {
  //     saveAuthUser(authUser);
  //     feedbackService.send({
  //       type: "success",
  //       message: `signed in: ${authUser.email}`,
  //     });
  //   },
  //   onError: (error) => {
  //     feedbackService.send({
  //       type: "error",
  //       message: "error ao fazer login",
  //       description: error.message,
  //     });
  //   },
  // });
}
