import { AuthUser } from "@/src/domain/auth/AuthUser";
import { formatISO } from "date-fns";

export const authUsers: AuthUser[] = [
  {
    id: "1",
    email: "lucas@coffstack.com",
    fullname: "Lucas Garcez",
    createdAt: formatISO(Date.now()),
  },
  {
    id: "2",
    email: "maria@coffstack.com",
    fullname: "Maria Silva",
    createdAt: formatISO(Date.now()),
  },
];
