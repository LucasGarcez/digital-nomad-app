import { Category } from "./Category";

export interface ICategoryRepo {
  findAll(): Promise<Category[]>;
}
