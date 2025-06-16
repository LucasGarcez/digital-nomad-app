import { Repositories } from "@domain";
import { authUsers } from "../inMemory/data/authUsers";
import { InMemoryAuthRepository } from "../inMemory/InMemoryAuthRepository";
import { SupabaseCategoryRepository } from "./SupabaseCategoryRepository";
import { SupabaseCityRepository } from "./SupabaseCityRepository";

export const SupabaseRepositories: Repositories = {
  city: SupabaseCityRepository,
  category: new SupabaseCategoryRepository(),
  auth: new InMemoryAuthRepository(authUsers),
};
