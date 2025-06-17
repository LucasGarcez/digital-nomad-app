import { ICategoryRepo } from "./category/ICategoryRepo";
import { ICityRepo } from "./city/ICityRepo";

export type Repositories = {
  city: ICityRepo;
  category: ICategoryRepo;
};
