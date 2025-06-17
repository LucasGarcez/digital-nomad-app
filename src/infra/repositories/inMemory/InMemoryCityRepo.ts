import { cities } from "@/src/data/cities";
import { City, CityPreview } from "@/src/domain/city/City";
import { CityFindAllFilters, ICityRepo } from "@/src/domain/city/ICityRepo";

export class InMemoryCityRepo implements ICityRepo {
  findById(id: string): Promise<City> {
    throw new Error("Method not implemented.");
  }
  getRelatedCities(cityId: string): Promise<CityPreview[]> {
    throw new Error("Method not implemented.");
  }

  async findAll(filters: CityFindAllFilters): Promise<CityPreview[]> {
    return cities;
  }
}
