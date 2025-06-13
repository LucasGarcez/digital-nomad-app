import { AuthUser } from "@/src/features/auth/Auth";
import { AuthRepository } from "@/src/features/auth/AuthRepository";
import { authUsers } from "./data/authUsers";

export class inMemoryAuthRepository implements AuthRepository {
  async signIn(email: string, password: string): Promise<AuthUser> {
    const user = authUsers.find(
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
}
