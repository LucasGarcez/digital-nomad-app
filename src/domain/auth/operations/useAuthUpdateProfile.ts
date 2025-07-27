import { useFeedbackService } from "@/src/infra/feedbackService/FeedbackProvider";
import {
  useAppMutation,
  UseAppMutationOptions,
} from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { useQueryClient } from "@tanstack/react-query";
import { AuthUpdateProfileParams } from "../IAuthRepo";

export function useAuthUpdateProfile(options?: UseAppMutationOptions<void>) {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();

  const queryClient = useQueryClient();

  return useAppMutation<void, AuthUpdateProfileParams>({
    mutationFn: (params) => auth.updateProfile(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      options?.onSuccess?.();
      feedbackService.send({
        type: "success",
        message: `perfil atualizado com sucesso`,
      });
    },
    onError: (error) => {
      options?.onError?.(error);
      feedbackService.send({
        type: "error",
        message: "erro ao atualizar perfil",
      });
    },
  });
}
