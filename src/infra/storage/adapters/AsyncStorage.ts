import RNAsyncStorage from "@react-native-async-storage/async-storage";
import { IStorage } from "../IStorage";

export const AsyncStorage: IStorage = {
  getItem: async (key) => {
    const item = await RNAsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    await RNAsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key) => {
    await RNAsyncStorage.removeItem(key);
  },
};
