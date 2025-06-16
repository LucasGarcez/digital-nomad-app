import { Repositories } from "../../../features/Repositories";
import { SupabaseCategoryRepository } from "./SupabaseCategoryRepository";
import { SupabaseCityRepository } from "./SupabaseCityRepository";

export const SupabaseRepositories: Repositories = {
  city: SupabaseCityRepository,
  category: new SupabaseCategoryRepository(),
};
