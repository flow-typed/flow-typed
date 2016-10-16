declare module 'safe-regex' {
  declare var exports: (re: RegExp | string, options?: {limit: number}) => boolean;
}
