import { City, CityPreview } from "../../../../domain/city/City";
import { ICityRepo } from "../../../../domain/city/ICityRepo";

import { supabase } from "./supabase";
import { supabaseAdapter } from "./supabaseAdapter";

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

    return cities?.map(supabaseAdapter.toCityPreview);
  } catch (error) {
    throw error;
  }
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

async function getRelatedCities(cityId: string): Promise<CityPreview[]> {
  const { data } = await supabase
    .from("related_cities")
    .select("*")
    .eq("source_city_id", cityId)
    .throwOnError();

  return data.map(supabaseAdapter.toCityPreview);
}

async function listFavorites(): Promise<CityPreview[]> {
  const session = await supabase.auth.getSession();

  if (session.error || !session.data.session) {
    throw new Error("invalid session");
  }

  const { data } = await supabase
    .from("favorite_cities")
    .select(
      `
    city_id,
    cities (
      id,
      name,
      country,
      cover_image
    )
  `
    )
    .eq("user_id", userId)
    .throwOnError();

  return data.map((item) =>
    supabaseAdapter.toCityPreview({ ...item.cities, isFavorite: true })
  );
}

async function toggleFavorite(
  cityId: string,
  isFavorite: boolean
): Promise<void> {
  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    throw new Error("invalid session");
  }

  const userId = data.session?.user.id;

  if (isFavorite) {
    await supabase
      .from("favorite_cities")
      .delete()
      .eq("user_id", userId)
      .eq("city_id", cityId);
  } else {
    await supabase
      .from("favorite_cities")
      .insert({ user_id: userId, city_id: cityId });
  }
}

export const SupabaseCityRepo: ICityRepo = {
  findAll,
  findById,
  getRelatedCities,
  listFavorites,
  toggleFavorite,
};
