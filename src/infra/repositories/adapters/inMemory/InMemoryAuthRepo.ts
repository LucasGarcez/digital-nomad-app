import { AuthUser } from "@/src/domain/auth/AuthUser";
import { IAuthRepo } from "@/src/domain/auth/IAuthRepo";
import { authUsers } from "./data/authUsers";

export class InMemoryAuthRepo implements IAuthRepo {
  async signIn(email: string, password: string): Promise<AuthUser> {
    const user = authUsers.find((user) => user.email === email);
    if (user) {
      return user;
    }

    throw new Error("user not found");
  }

  async signOut(): Promise<void> {
    //
  }
}
