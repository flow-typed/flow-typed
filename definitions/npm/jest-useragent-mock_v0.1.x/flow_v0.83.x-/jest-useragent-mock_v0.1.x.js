declare module 'jest-useragent-mock' {
  declare export function mockUserAgent(userAgent?: string | null): void;

  declare export function clear(): void;
}
