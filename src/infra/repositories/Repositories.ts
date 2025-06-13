import { AuthRepository } from "@/src/features/auth/AuthRepository";
import { CategoryRepository } from "@/src/features/category/CategoryRepository";
import { CityRepository } from "@/src/features/city/CityRepository";

export type Repositories = {
  city: CityRepository;
  category: CategoryRepository;
  auth: AuthRepository;
};
