import { Repositories } from "@/src/domain/Repositories";
import { SupabaseCategoryRepo } from "./SupabaseCategoryRepo";
import { SupabaseCityRepo } from "./SupabaseCityRepo";

export const SupabaseRepositories: Repositories = {
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
};
