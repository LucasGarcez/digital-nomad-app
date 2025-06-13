import React from "react";
import { Repositories } from "./Repositories";

const RepositoryContext = React.createContext<Repositories>({} as Repositories);

export const RepositoryProvider = RepositoryContext.Provider;

export function useRepository() {
  return React.useContext(RepositoryContext);
}
