import { City, CityPreview } from "./City";

export type CityFindAllFilters = {
  name?: string;
  categoryId?: string | null;
};

export interface ICityRepo {
  findAll(filters: CityFindAllFilters): Promise<CityPreview[]>;
  findById(id: string): Promise<City>;
  getRelatedCities(cityId: string): Promise<CityPreview[]>;
  saveFavorite(params: { userId: string; cityId: string }): Promise<void>;
  listFavorites(userId: string): Promise<CityPreview[]>;
}
