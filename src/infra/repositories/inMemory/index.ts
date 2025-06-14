import { Repositories } from "../Repositories";
import { authUsers } from "./data/authUsers";
import { InMemoryAuthRepository } from "./InMemoryAuthRepository";
import { InMemoryCategoryRepository } from "./InMemoryCategoryRepository";
import { InMemoryCityRepository } from "./InMemoryCityRepository";

export const InMemoryRepositories: Repositories = {
  city: new InMemoryCityRepository(),
  category: new InMemoryCategoryRepository(),
  auth: new InMemoryAuthRepository(authUsers),
};
