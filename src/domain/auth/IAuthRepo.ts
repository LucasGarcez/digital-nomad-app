import { AuthUser } from "./AuthUser";

export type AuthSignUpParams = {
  fullname: string;
  email: string;
  password: string;
};

export type AuthUpdateUserParams = {
  fullname?: string;
};

export interface IAuthRepo {
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
  signUp: (params: AuthSignUpParams) => Promise<void>;
  sendResetPasswordEmail: (email: string) => Promise<void>;
  updateUser: (params: AuthUpdateUserParams) => Promise<void>;
}
