import { Repositories } from "@/src/domain/Repositories";
import { InMemoryAuthRepo } from "../inMemory/InMemoryAuthRepo";
import { SupabaseCategoryRepo } from "./SupabaseCategoryRepo";
import { SupabaseCityRepo } from "./SupabaseCityRepo";

export const SupabaseRepositories: Repositories = {
  auth: new InMemoryAuthRepo(), //TODO: replace with supabase auth implementation
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
};
