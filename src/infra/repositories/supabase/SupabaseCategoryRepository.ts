import { Category, CategoryCode } from "@/src/features/category/Category";
import { CategoryRepository } from "@/src/features/category/CategoryRepository";
import { supabase } from "@/src/supabase/supabase";

export class SupabaseCategoryRepository implements CategoryRepository {
  async findAll(): Promise<Category[]> {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) {
      throw new Error("error trying to list categories");
    }

    return data.map((row) => ({
      id: row.id,
      description: row.description,
      name: row.name,
      code: row.code as CategoryCode,
    }));
  }
}
