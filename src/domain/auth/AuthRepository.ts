import { AuthUser } from "./Auth";

export type AuthSignUpParams = {
  fullname: string;
  email: string;
  password: string;
};
export interface AuthRepository {
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
  signUp: (params: AuthSignUpParams) => Promise<void>;
}
