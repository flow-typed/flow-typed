declare module 'memory-cache' {
  declare module.exports: {
    get: (key: string) => *,
    put: (key: string, data: *, expiresUntil?: number) => void,
  }
}
