import { Category } from "./Category";

export interface CategoryRepository {
  findAll(): Promise<Category[]>;
}
