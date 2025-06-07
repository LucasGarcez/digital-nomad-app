import { CityPreview } from "../types";
import { supabase } from "./supabase";

const storageURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL;

export type CityFilters = {
  name?: string;
  categoryId?: string | null;
};

async function findAll(filters: CityFilters): Promise<CityPreview[]> {
  try {
    const { data } = await supabase
      .from("cities")
      .select("*")
      .ilike("name", `%${filters.name}%`);

    if (!data) {
      throw new Error("data is not available");
    }

    return data?.map((row) => ({
      id: row.id,
      country: row.country,
      name: row.name,
      coverImage: `${storageURL}/${row.cover_image}`,
    }));
  } catch (error) {
    throw error;
  }
}

export const supabaseService = { findAll };
