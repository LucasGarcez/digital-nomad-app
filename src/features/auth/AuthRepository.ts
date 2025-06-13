import { AuthUser } from "./Auth";

export interface AuthRepository {
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
}
