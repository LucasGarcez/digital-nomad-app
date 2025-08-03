import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useAuthGetUser() {
  const { auth } = useRepository();

  return useAppQuery({
    queryKey: ["user"],
    fetchData: () => auth.getUser(),
  });
}
