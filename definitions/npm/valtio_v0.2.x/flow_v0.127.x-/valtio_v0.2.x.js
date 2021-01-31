declare module 'valtio' {
  declare export function proxy<T: { ... }>(initialObject?: T): T;
  declare export function useProxy<T: { ... }>(proxy: T): T;
  declare export function subscribe(
    proxy: any,
    callback: () => void
  ): () => void;
}
