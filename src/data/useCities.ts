import { cityPreviewList } from "./cities";

export function useCities(cityName: string, categoryId: string | null) {
  console.log({ cityName, categoryId });

  return { cityPreviewList };
}
