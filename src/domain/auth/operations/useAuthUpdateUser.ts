import { useFeedbackService } from "@/src/infra/feedbackService/FeedbackProvider";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { AuthUpdateUserParams } from "../IAuthRepo";

export function useAuthUpdateUser() {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();

  return useAppMutation<void, AuthUpdateUserParams>({
    mutateFn: (params) => auth.updateUser(params),
    onSuccess: () => {
      feedbackService.send({
        type: "success",
        message: `dados atualizados com sucesso!`,
      });
    },
  });
}
