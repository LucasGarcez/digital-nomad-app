import { useFetchData } from "../../../data/useFetchData";
import { useRepository } from "../../../infra/repositories/RepositoryProvider";
import { CityFindAllFilters } from "../CityRepository";

export function useCities(filters: CityFindAllFilters) {
  const { city } = useRepository();
  return useFetchData(
    () => city.findAll(filters),
    [filters.name, filters.categoryId]
  );
}

// let cityPreviewList = [...cities];

// if (name) {
//   cityPreviewList = cityPreviewList.filter((city) => {
//     return city.name.toLowerCase().includes(name.toLowerCase());
//   });
// }

// if (categoryId) {
//   cityPreviewList = cityPreviewList.filter((city) => {
//     return city.categories.some((category) => category.id === categoryId);
//   });
// }
