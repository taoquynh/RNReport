import AsyncStorage from "@react-native-async-storage/async-storage";

export default class StorageService {
  async setItem(key: string, value: string) {
    let stringValue = null;
    // if (typeof value === "string") {
    //   stringValue = value;
    // } else {
    //   stringValue = JSON.stringify(value);
    // }
    return AsyncStorage.setItem(key, value)
  }
}

export const storageService = new StorageService();
