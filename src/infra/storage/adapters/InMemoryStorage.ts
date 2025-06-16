import { IStorage } from "../IStorage";

class InMemoryStorage implements IStorage {
  private store = new Map<string, any>();

  async setItem(key: string, value: any): Promise<void> {
    this.store.set(key, value);
  }

  async getItem<IData>(key: string): Promise<IData | null> {
    if (!this.store.has(key)) {
      return null;
    }
    return this.store.get(key) as IData;
  }

  async removeItem(key: string): Promise<void> {
    this.store.delete(key);
  }

  // Optional helper for testing
  clear(): void {
    this.store.clear();
  }
}
//using a singleton so will can call clear when testing
export const inMemoryStorage = new InMemoryStorage();
