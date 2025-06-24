import { useFeedbackService } from "@/src/infra/feedbackService/FeedbackProvider";
import {
  useAppMutation,
  UseAppMutationOptions,
} from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useAuthSendResetPasswordEmail(
  options?: UseAppMutationOptions<void>
) {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();

  return useAppMutation<void, { email: string }>({
    mutateFn: ({ email }) => auth.sendResetPasswordEmail(email),
    onSuccess: () => {
      options?.onSuccess?.();
      feedbackService.send({
        type: "success",
        message: `verifique sua caixa de e-mail`,
      });
    },
    onError: (error) => {
      options?.onError?.(error);
      feedbackService.send({ type: "error", message: "error on sign" });
    },
  });
}
