// exemplo

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DateISO8601 } from "../domain/types";

// https://date-fns.org/v4.1.0/docs/format
// https://date-fns.org/v4.1.0/docs/format#types/FormatOptions/630
function getMonthAndYear(date: DateISO8601): string {
  return format(date, "MMMM yyyy", { locale: ptBR });
}

export const dateUtils = {
  getMonthAndYear,
};
