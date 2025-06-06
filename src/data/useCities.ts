import { supabaseService } from "../supabase/supabaseService";
import { CityPreview } from "../types";
import { cities } from "./cities";

type CityFilter = {
  name?: string;
  categoryId?: string | null;
};

export function useCities({ name, categoryId }: CityFilter): {
  cityPreviewList: CityPreview[];
} {
  supabaseService.findAll();
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

  return { cityPreviewList };
}
