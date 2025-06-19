export type CategoryCode =
  | "ADVENTURE"
  | "BEACH"
  | "CULTURE"
  | "GASTRONOMY"
  | "HISTORY"
  | "LUXURY"
  | "NATURE"
  | "SHOPPING"
  | "URBAN"
  | "FAVORITE";

export type Category = {
  id: string;
  name: string;
  description: string | null;
  code: CategoryCode;
};
