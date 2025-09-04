import { IStorage } from "./IStorage";

export class LocalStorageService implements IStorage {

    async setData(key: string, value: any): Promise<void> {
       localStorage.setItem(key, value);
       return Promise.resolve();
    }

    async getData(key: string): Promise<any> {
       return Promise.resolve(localStorage.getItem(key));
    }
}