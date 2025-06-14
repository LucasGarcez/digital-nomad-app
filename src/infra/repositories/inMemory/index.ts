import { Repositories } from "../Repositories";
import { authUsers } from "./data/authUsers";
import { inMemoryAuthRepository } from "./inMemoryAuthRepository";
import { InMemoryCategoryRepository } from "./InMemoryCategoryRepository";
import { InMemoryCityRepository } from "./InMemoryCityRepository";

export const InMemoryRepositories: Repositories = {
  city: new InMemoryCityRepository(),
  category: new InMemoryCategoryRepository(),
  auth: new inMemoryAuthRepository(authUsers),
};
