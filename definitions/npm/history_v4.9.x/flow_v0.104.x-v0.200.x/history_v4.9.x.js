declare module 'history' {
  declare function Unblock(): void;

  declare export type Action = 'PUSH' | 'REPLACE' | 'POP';

  declare export type BrowserLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: {...},
    key: string,
    ...
  };

  declare interface IBrowserHistory {
    length: number;
    location: BrowserLocation;
    action: Action;
    push(path: string, state?: {...}): void;
    push(location: $Shape<BrowserLocation>): void;
    replace(path: string, state?: {...}): void;
    replace(location: $Shape<BrowserLocation>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    listen((location: BrowserLocation, action: Action) => void): void;
    block(message: string): typeof Unblock;
    block(
      (location: BrowserLocation, action: Action) => string
    ): typeof Unblock;
  }

  declare export type BrowserHistory = IBrowserHistory;

  declare type BrowserHistoryOpts = {
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void
    ) => void,
    ...
  };

  declare function createBrowserHistory(
    opts?: BrowserHistoryOpts
  ): BrowserHistory;

  declare export type MemoryLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: {...},
    key: string,
    ...
  };

  declare interface IMemoryHistory {
    length: number;
    location: MemoryLocation;
    action: Action;
    index: number;
    entries: Array<string>;
    push(path: string, state?: {...}): void;
    push(location: $Shape<MemoryLocation>): void;
    replace(path: string, state?: {...}): void;
    replace(location: $Shape<MemoryLocation>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    // Memory only
    canGo(n: number): boolean;
    listen((location: MemoryLocation, action: Action) => void): void;
    block(message: string): typeof Unblock;
    block((location: MemoryLocation, action: Action) => string): typeof Unblock;
  }

  declare export type MemoryHistory = IMemoryHistory;

  declare type MemoryHistoryOpts = {
    initialEntries?: Array<string>,
    initialIndex?: number,
    keyLength?: number,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void
    ) => void,
    ...
  };

  declare function createMemoryHistory(opts?: MemoryHistoryOpts): MemoryHistory;

  declare export type HashLocation = {
    pathname: string,
    search: string,
    hash: string,
    ...
  };

  declare interface IHashHistory {
    length: number;
    location: HashLocation;
    action: Action;
    push(path: string, state?: {...}): void;
    push(location: $Shape<HashLocation>): void;
    replace(path: string, state?: {...}): void;
    replace(location: $Shape<HashLocation>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    listen((location: HashLocation, action: Action) => void): void;
    block(message: string): typeof Unblock;
    block((location: HashLocation, action: Action) => string): typeof Unblock;
    push(path: string): void;
  }

  declare export type HashHistory = IHashHistory;

  declare type HashHistoryOpts = {
    basename?: string,
    hashType: 'slash' | 'noslash' | 'hashbang',
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void
    ) => void,
    ...
  };

  declare function createHashHistory(opts?: HashHistoryOpts): HashHistory;

  declare function parsePath(path: string): BrowserLocation | MemoryLocation | HashLocation;

  declare function createPath(
    path: BrowserLocation | MemoryLocation | HashLocation
  ): string;
}
