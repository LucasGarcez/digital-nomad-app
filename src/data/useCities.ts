import { CityFilters, supabaseService } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export function useCities(filters: CityFilters) {
  return useFetchData(
    () => supabaseService.findAll(filters),
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
