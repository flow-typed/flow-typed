declare module 'mousetrap' {
  declare function bind(key: string|Array<string>, fn: (e: Event, combo?: string) => void, eventType?: string): void;
  declare function unbind(key: string): void;
  declare function trigger(key: string): void;
  declare var stopCallback: Function;
  declare function reset(): void;
}
