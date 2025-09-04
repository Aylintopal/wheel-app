export abstract class IStorage {

    abstract setData(key: string, value: any): Promise<void>;

    abstract getData(key: string): Promise<string | null>;
}