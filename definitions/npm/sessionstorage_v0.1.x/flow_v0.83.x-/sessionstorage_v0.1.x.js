declare module 'sessionstorage' {
  declare type SessionStorage = {|
    getItem: (key: string) => ?string,
    setItem: (key: string, value: string) => void,
    removeItem: (key: string) => void,
    clear: () => void,
  |};

  declare module.exports: SessionStorage;
}
