import { City, CityPreview } from "@/src/domain/city/City";
import { CityFindAllFilters, ICityRepo } from "@/src/domain/city/ICityRepo";
import { cities } from "@/src/infra/repositories/adapters/inMemory/data/cities";

export class InMemoryCityRepo implements ICityRepo {
  async findById(id: string): Promise<City> {
    const city = cities.find((city) => city.id === id);
    if (city) {
      return city;
    }
    throw new Error("City not found");
  }
  async getRelatedCities(cityId: string): Promise<CityPreview[]> {
    const city = cities.find((city) => city.id === cityId);
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
    return cityPreviewList;
  }
}
