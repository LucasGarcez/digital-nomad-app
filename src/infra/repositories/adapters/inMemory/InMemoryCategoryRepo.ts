import { Category } from "@/src/domain/category/Category";
import { ICategoryRepo } from "@/src/domain/category/ICategoryRepo";
import { categories } from "@/src/infra/repositories/adapters/inMemory/data/categories";

export class InMemoryCategoryRepo implements ICategoryRepo {
  async findAll(): Promise<Category[]> {
    return categories;
  }
}
