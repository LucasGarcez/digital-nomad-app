import { City, CityPreview } from "../../../../domain/city/City";
import {
  CityToggleFavoriteParams,
  ICityRepo,
} from "../../../../domain/city/ICityRepo";

import { supabase } from "./supabase";
import { supabaseAdapter } from "./supabaseAdapter";

const CITY_PREVIEW_FIELDS =
  "id,name,country,cover_image,favorite_cities!left(user_id)";

export type CityFilters = {
  name?: string;
  categoryId?: string | null;
};

async function findAll(
  filters: CityFilters,
  userId: string
): Promise<CityPreview[]> {
  try {
    let cities;
    if (filters.categoryId) {
      const { data } = await supabase
        .from("cities_with_categories")
        .select(CITY_PREVIEW_FIELDS)
        .eq("category_id", filters.categoryId)
        .ilike("name", `%${filters.name}%`)
        .eq("favorite_cities.user_id", userId);

      cities = data;
    } else {
      const { data } = await supabase
        .from("cities")
        .select(CITY_PREVIEW_FIELDS)
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

async function findById({
  id,
  userId,
}: {
  id: string;
  userId: string;
}): Promise<City> {
  const { data, error } = await supabase
    .from("cities_with_full_info")
    .select(`*,favorite_cities(user_id)`)
    .eq("id", id)
    .eq("favorite_cities.user_id", userId) // importante: filtra a relação!
    .single();

  if (error) {
    throw new Error("city not found");
  }

  return supabaseAdapter.toCity(data);
}

async function getRelatedCities({
  cityId,
  userId,
}: {
  cityId: string;
  userId: string;
}): Promise<CityPreview[]> {
  const { data } = await supabase
    .from("related_cities")
    .select(CITY_PREVIEW_FIELDS)
    .eq("source_city_id", cityId)
    .eq("favorite_cities.user_id", userId)
    .throwOnError();

  return data.map(supabaseAdapter.toCityPreview);
}

async function toggleFavorite({
  cityId,
  userId,
  isFavorite,
}: CityToggleFavoriteParams): Promise<void> {
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

async function listFavorites(userId: string): Promise<CityPreview[]> {
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

export const SupabaseCityRepo: ICityRepo = {
  findAll,
  findById,
  getRelatedCities,
  toggleFavorite,
  listFavorites,
};
