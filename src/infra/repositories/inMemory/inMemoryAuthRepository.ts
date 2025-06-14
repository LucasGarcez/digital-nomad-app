import { AuthUser } from "@/src/features/auth/Auth";
import {
  AuthRepository,
  AuthSignUpParams,
} from "@/src/features/auth/AuthRepository";

export class inMemoryAuthRepository implements AuthRepository {
  users: AuthUser[];

  constructor(users: AuthUser[]) {
    this.users = users;
  }

  async signIn(email: string, password: string): Promise<AuthUser> {
    const user = this.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (user) {
      return user;
    }
    throw new Error("user not found");
  }

  async signOut(): Promise<void> {
    // delay
  }

  async signUp(params: AuthSignUpParams): Promise<void> {
    this.users.push({
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      email: params.email,
    });
  }
}
