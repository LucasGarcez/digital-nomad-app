import { supabaseService } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export function useCategories() {
  return useFetchData(() => supabaseService.listCategory());
}
