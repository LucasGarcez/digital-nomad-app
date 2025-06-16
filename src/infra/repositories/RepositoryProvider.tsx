import { Repositories } from "@domain";
import React from "react";

const RepositoryContext = React.createContext<Repositories>({} as Repositories);

export const RepositoryProvider = RepositoryContext.Provider;

export function useRepository() {
  return React.useContext(RepositoryContext);
}
