import { IAuthRepo } from "./auth/IAuthRepo";
import { ICategoryRepo } from "./category/ICategoryRepo";
import { ICityRepo } from "./city/ICityRepo";

export type Repositories = {
  auth: IAuthRepo;
  city: ICityRepo;
  category: ICategoryRepo;
};
