declare module 'memory-cache' {
  declare class MemoryCache {
  	put(key: string, value: *, time?: number, timeoutCallback?: (key: string, value: *) => void): void;
    get(key: string): *;
    del(key: string): boolean;
    clear(): void;
    size(): number;
    memsize(): number;
    debug(debug: boolean): void;
    hits(): number;
    misses(): number;
    keys(): string[];
    exportJson(): string;
    importJson(json: string, options?: { skipDuplicates: boolean, ... }): number;
    Cache(): MemoryCache;
  }

  declare export default MemoryCache;
}
