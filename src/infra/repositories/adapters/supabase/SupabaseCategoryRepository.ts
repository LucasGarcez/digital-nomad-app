import { Category, CategoryCode, CategoryRepository } from "@domain";
import { supabase } from "./supabase";

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
