import { City, CityPreview } from "./City";

export type CityFindAllFilters = {
  name?: string;
  categoryId?: string | null;
};

export type CityToggleFavoriteParams = {
  userId: string;
  cityId: string;
  isFavorite: boolean;
};

export interface ICityRepo {
  findAll(filters: CityFindAllFilters, userId: string): Promise<CityPreview[]>;
  findById(params: { id: string; userId: string }): Promise<City>;
  getRelatedCities(params: {
    cityId: string;
    userId: string;
  }): Promise<CityPreview[]>;
  toggleFavorite(params: CityToggleFavoriteParams): Promise<void>;
  listFavorites(userId: string): Promise<CityPreview[]>;
}
