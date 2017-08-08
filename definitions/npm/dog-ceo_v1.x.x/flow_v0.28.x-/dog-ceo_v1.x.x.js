declare module 'dog-ceo' {
  declare type UrlCallback = (error?: Error, url?: string) => void;
  declare type UrlsCallback = (error?: Error, urls?: string[]) => void;

  declare export class Breed {
    static doApiRequest(endpoint: string, callback: UrlCallback, root?: string): void;
    static list(callback: UrlsCallback): void;
    static getRandomImageUrl(callback: UrlCallback): void;

    identifier: string;

    constructor(breed: string, subbreed?: string): this;
    getImageUrls(callback: UrlsCallback): void;
    getRandomImageUrl(callback: UrlCallback): void;
  }
}
