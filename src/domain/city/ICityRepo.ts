import { Category } from "../category/Category";
import { City, CityPreview } from "./City";

export type CityFindAllFilters = {
  name?: string;
  categoryId?: string | null;
};

export type CityToggleFavoriteParams = {
  cityId: string;
  isFavorite: boolean;
};

export type CitiesGroupedByCategory = {
  category: Category;
  cities: CityPreview[];
};

export interface ICityRepo {
  findAll(filters: CityFindAllFilters): Promise<CityPreview[]>;
  findById(id: string): Promise<City>;
  findGroupedByCategory: () => Promise<CitiesGroupedByCategory[]>;
  getRelatedCities(cityId: string): Promise<CityPreview[]>;
  toggleFavorite(params: CityToggleFavoriteParams): Promise<void>;
  findAllFavorites(): Promise<CityPreview[]>;
}
