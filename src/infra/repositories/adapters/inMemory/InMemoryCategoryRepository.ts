import { Category, CategoryRepository } from "@domain";
import { categories } from "./data/categories";

export class InMemoryCategoryRepository implements CategoryRepository {
  async findAll(): Promise<Category[]> {
    return categories;
  }
}
