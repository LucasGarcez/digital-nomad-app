import { Category, CategoryCode, City, CityPreview } from "../types";
import { supabase } from "./supabase";
import { storageURL, supabaseAdapter } from "./supabaseAdapter";

export type CityFilters = {
  name?: string;
  categoryId?: string | null;
};

async function findAll(filters: CityFilters): Promise<CityPreview[]> {
  try {
    const fields = "id,name,country,cover_image";

    let cities;
    if (filters.categoryId) {
      const { data } = await supabase
        .from("cities_with_categories")
        .select(fields)
        .eq("category_id", filters.categoryId)
        .ilike("name", `%${filters.name}%`);

      cities = data;
    } else {
      const { data } = await supabase
        .from("cities")
        .select(fields)
        .ilike("name", `%${filters.name}%`);

      cities = data;
    }

    if (!cities) {
      throw new Error("data is not available");
    }

    return cities?.map(
      (row) =>
        ({
          id: row.id,
          country: row.country,
          name: row.name,
          coverImage: `${storageURL}/${row.cover_image}`,
        } as CityPreview)
    );
  } catch (error) {
    throw error;
  }
}

async function listCategory(): Promise<Category[]> {
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

async function findById(id: string): Promise<City> {
  const { data, error } = await supabase
    .from("cities_with_full_info")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("city not found");
  }

  return supabaseAdapter.toCity(data);
}

export const supabaseService = { findAll, listCategory, findById };
