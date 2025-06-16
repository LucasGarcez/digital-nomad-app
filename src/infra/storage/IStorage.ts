export interface IStorage {
  setItem: (key: string, value: any) => Promise<void>;
  getItem: <IData>(key: string) => Promise<IData | null>;
  removeItem: (key: string) => Promise<void>;
}
