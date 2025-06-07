import { useEffect, useState } from "react";
import { supabaseService } from "../supabase/supabaseService";
import { Category } from "../types";

type UseCategoriesReturn = {
  categories: Category[];
  isLoading: boolean;
  error: unknown;
};

export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      const cities = await supabaseService.listCategory();

      setCategories(cities);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    categories: categories || [],
    isLoading,
    error,
  };
}
