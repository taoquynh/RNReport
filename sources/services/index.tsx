import AsyncStorage from "@react-native-async-storage/async-storage";

export default class StorageService {
  static getAPIToken(): any {
    throw new Error("Method not implemented.");
  }
  async setItem(key: string, value: string) {
    let stringValue = null;
    if (typeof value === "string") {
      stringValue = value;
    } else {
      stringValue = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, value);
  }

  async getItem(key: string) {
    const item = await AsyncStorage.getItem(key);
    return item;
  }

  async getString(key: string) {
    let item = this.getItem(key);
    return item;
  }

  getAPIToken() {
    return this.getString("TOKEN");
  }
}

export const storageService = new StorageService();
