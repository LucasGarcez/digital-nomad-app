import { Repositories } from "@/src/domain/Repositories";
import { InMemoryCategoryRepo } from "./InMemoryCategoryRepo";
import { InMemoryCityRepo } from "./InMemoryCityRepo";

export const InMemoryRepository: Repositories = {
  city: new InMemoryCityRepo(),
  category: new InMemoryCategoryRepo(),
};
