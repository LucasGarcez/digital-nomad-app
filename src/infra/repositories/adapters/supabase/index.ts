import { Repositories } from "@/src/domain/Repositories";
import { SupabaseAuthRepo } from "./SupabaseAuthRepo";
import { SupabaseCategoryRepo } from "./SupabaseCategoryRepo";
import { SupabaseCityRepo } from "./SupabaseCityRepo";

export const SupabaseRepositories: Repositories = {
  auth: SupabaseAuthRepo,
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
};
