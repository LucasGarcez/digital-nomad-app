import { AuthUser } from "./AuthUser";

export interface IAuthRepo {
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
}
