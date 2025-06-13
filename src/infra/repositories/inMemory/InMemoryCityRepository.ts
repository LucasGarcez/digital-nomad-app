import { City, CityPreview } from "@/src/features/city/City";
import {
  CityFindAllFilters,
  CityRepository,
} from "@/src/features/city/CityRepository";
import { cities } from "./data/cities";

export class InMemoryCityRepository implements CityRepository {
  async findById(id: string): Promise<City> {
    const city = cities.find((city) => city.id === id);
    if (city) {
      return city;
    }
    throw new Error("City not found");
  }
  async getRelatedCities(cityId: string): Promise<CityPreview[]> {
    return [];
  }

  async findAll({
    categoryId,
    name,
  }: CityFindAllFilters): Promise<CityPreview[]> {
    let cityPreviewList = [...cities];
    if (name) {
      cityPreviewList = cityPreviewList.filter((city) => {
        return city.name.toLowerCase().includes(name?.toLowerCase());
      });
    }
    if (categoryId) {
      cityPreviewList = cityPreviewList.filter((city) => {
        return city.categories.some((category) => category.id === categoryId);
      });
    }

    return cityPreviewList;
  }
}
