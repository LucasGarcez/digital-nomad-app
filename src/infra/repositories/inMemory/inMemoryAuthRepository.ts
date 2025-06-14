import { AuthUser } from "@/src/features/auth/Auth";
import {
  AuthRepository,
  AuthSignUpParams,
} from "@/src/features/auth/AuthRepository";

export class InMemoryAuthRepository implements AuthRepository {
  private users: AuthUser[];

  constructor(users: AuthUser[]) {
    this.users = users;
  }

  signIn = async (email: string, password: string): Promise<AuthUser> => {
    const user = this.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (user) {
      return user;
    }
    throw new Error("user not found");
  };

  signOut = async (): Promise<void> => {
    // delay
  };

  /**
   * When you pass signUp as a callback (e.g., someFunction(repo.signUp))
   * you lose the this context, unless you bind it explicitly.
   *
   * That's why we need need to define the method as a class field (arrow function)
   */

  signUp = async (params: AuthSignUpParams): Promise<void> => {
    this.users.push({
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      email: params.email,
    });
  };
}
