import { DateISO8601 } from "../types";

export type AuthUser = {
  id: string;
  email: string;
  fullname: string;
  createdAt: DateISO8601;
  // token: string
};
