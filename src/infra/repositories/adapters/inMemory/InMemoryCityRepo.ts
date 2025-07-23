import { City, CityPreview } from "@/src/domain/city/City";
import {
  CityFindAllFilters,
  CityToggleFavoriteParams,
  ICityRepo,
} from "@/src/domain/city/ICityRepo";
import { cities } from "@/src/infra/repositories/adapters/inMemory/data/cities";

export class InMemoryCityRepo implements ICityRepo {
  toggleFavorite(params: CityToggleFavoriteParams): Promise<void> {
    throw new Error("Method not implemented.");
  }
  listFavorites(userId: string): Promise<CityPreview[]> {
    throw new Error("Method not implemented.");
  }
  async findById(params: { id: string; userId: string }): Promise<City> {
    const city = cities.find((city) => city.id === params.id);
    if (city) {
      return city;
    }
    throw new Error("City not found");
  }
  async getRelatedCities(params: {
    cityId: string;
    userId: string;
  }): Promise<CityPreview[]> {
    const city = cities.find((city) => city.id === params.cityId);
    return cities.filter((c) => city?.relatedCitiesIds.includes(c.id));
  }

  async findAll({
    name,
    categoryId,
  }: CityFindAllFilters): Promise<CityPreview[]> {
    let cityPreviewList = [...cities];

    if (name) {
      cityPreviewList = cityPreviewList.filter((city) => {
        return city.name.toLowerCase().includes(name.toLowerCase());
      });
    }

    if (categoryId) {
      cityPreviewList = cityPreviewList.filter((city) => {
        return city.categories.some((category) => category.id === categoryId);
      });
    }

    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("");
    //   }, 2000);
    // });

    // throw new Error("server is down!");

    return cityPreviewList;
  }
}
