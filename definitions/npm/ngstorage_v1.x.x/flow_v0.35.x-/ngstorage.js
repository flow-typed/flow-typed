/**
 * Flowtype definitions for ngstorage
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'storage' {
    declare export interface IStorageService {
        $default(items: {}): IStorageService,
            $reset(items?: {}): IStorageService,
            $apply(): void,
            $sync(): void, [key: string]: any
    }
    declare export type IStorageProvider = {
        get<T>(key: string): T,
        set<T>(key: string, value: T): T,
        setKeyPrefix(prefix: string): void,
        setSerializer(serializer: (value: any) => string): void,
        setDeserializer(deserializer: (value: string) => any): void
    }
}