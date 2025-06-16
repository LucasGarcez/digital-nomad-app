import { AuthRepository } from "./auth/AuthRepository";
import { CategoryRepository } from "./category/CategoryRepository";
import { CityRepository } from "./city/CityRepository";

export type Repositories = {
  city: CityRepository;
  category: CategoryRepository;
  auth: AuthRepository;
};
