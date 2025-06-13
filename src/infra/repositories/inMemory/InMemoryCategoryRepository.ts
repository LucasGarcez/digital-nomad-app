import { Category } from "@/src/features/category/Category";
import { CategoryRepository } from "@/src/features/category/CategoryRepository";
import { categories } from "./data/categories";

export class InMemoryCategoryRepository implements CategoryRepository {
  async findAll(): Promise<Category[]> {
    return categories;
  }
}
