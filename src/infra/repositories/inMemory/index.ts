import { Repositories } from "../Repositories";
import { InMemoryCategoryRepository } from "./InMemoryCategoryRepository";
import { InMemoryCityRepository } from "./InMemoryCityRepository";

export const InMemoryRepositories: Repositories = {
  city: new InMemoryCityRepository(),
  category: new InMemoryCategoryRepository(),
};
