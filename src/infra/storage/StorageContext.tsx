import { createContext, PropsWithChildren, useContext } from "react";

export interface IStorage {
  setItem: (key: string, value: any) => Promise<void>;
  getItem: <IData>(key: string) => Promise<IData | null>;
  removeItem: (key: string) => Promise<void>;
}

export const StorageContext = createContext<{ storage: IStorage }>({
  storage: {} as IStorage,
});

export function StorageProvider({
  children,
  storage,
}: PropsWithChildren<{ storage: IStorage }>) {
  return (
    <StorageContext.Provider value={{ storage }}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("StorageContext should be used within a StorageProvider");
  }
  return context;
}
