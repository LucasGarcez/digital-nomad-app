import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { DateISO8601 } from "../domain/types";

function formatMonthAndYear(date: DateISO8601): string {
  return format(date, "MMMM yyyy", { locale: ptBR });
}

export const dateUtils = {
  formatMonthAndYear,
};
