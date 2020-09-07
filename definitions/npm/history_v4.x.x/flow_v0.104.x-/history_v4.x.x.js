declare module "history/createBrowserHistory" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  declare export type BrowserLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: {...},
    key: string,
    ...
  };

  declare export interface BrowserHistory {
    length: number,
    location: $Shape<BrowserLocation>,
    action: Action,
    push(path: string, state?: {...}): void,
    push(location: $Shape<BrowserLocation>): void,
    replace(path: string, state?: {...}): void,
    replace(location: $Shape<BrowserLocation>): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    listen: Function,
    block(message: string): typeof Unblock,
    block((location: BrowserLocation, action: Action) => string): typeof Unblock,
  }

  declare type BrowserHistoryOpts = {
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
    ...
  };

  declare export default (opts?: BrowserHistoryOpts) => BrowserHistory;
}

declare module "history/createMemoryHistory" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  declare export type MemoryLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: {...},
    key: string,
    ...
  };

  declare export interface MemoryHistory {
    length: number,
    location: $Shape<MemoryLocation>,
    action: Action,
    index: number,
    entries: Array<MemoryLocation | string>,
    push(path: string, state?: {...}): void,
    push(location: $Shape<MemoryLocation>): void,
    replace(path: string, state?: {...}): void,
    replace(location: $Shape<MemoryLocation>): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    // Memory only
    canGo?: (n: number) => boolean,
    listen: Function,
    block(message: string): typeof Unblock,
    block((location: MemoryLocation, action: Action) => ?string): typeof Unblock,
  }

  declare type MemoryHistoryOpts = {
    initialEntries?: Array<MemoryLocation | string>,
    initialIndex?: number,
    keyLength?: number,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
    ...
  };

  declare export default (opts?: MemoryHistoryOpts) => MemoryHistory;
}

declare module "history/createHashHistory" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  declare export type HashLocation = {
    pathname: string,
    search: string,
    hash: string,
    ...
  };

  declare export interface HashHistory {
    length: number,
    location: $Shape<HashLocation>,
    action: Action,
    push(path: string, state?: {...}): void,
    push(location: $Shape<HashLocation>): void,
    replace(path: string, state?: {...}): void,
    replace(location: $Shape<HashLocation>): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    listen: Function,
    block(message: string): typeof Unblock,
    block((location: HashLocation, action: Action) => string): typeof Unblock,
    push(path: string): void,
  }

  declare type HashHistoryOpts = {
    basename?: string,
    hashType: "slash" | "noslash" | "hashbang",
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
    ...
  };

  declare export default (opts?: HashHistoryOpts) => HashHistory;
}

declare module 'history' {
  import typeof CreateMemoryHistory from 'history/createMemoryHistory';
  import typeof CreateHashHistory from 'history/createHashHistory';
  import typeof CreateBrowserHistory from 'history/createBrowserHistory';

  import type {
    MemoryHistory,
    MemoryLocation,
    MemoryHistoryOpts
  } from 'history/createMemoryHistory';
  import type {
    HashHistory,
    HashLocation,
    HashHistoryOpts
  } from 'history/createHashHistory';
  import type {
    BrowserHistory,
    BrowserLocation,
    BrowserHistoryOpts
  } from 'history/createBrowserHistory';

  declare module.exports: {|
    createMemoryHistory: CreateMemoryHistory,
    createHashHistory: CreateHashHistory,
    createBrowserHistory: CreateBrowserHistory,
    HashHistory: HashHistory,
    HashLocation: HashHistory,
    HashHistoryOpts: HashHistory,
    MemoryHistory: MemoryHistory,
    MemoryLocation: MemoryHistory,
    MemoryHistoryOpts: MemoryHistory,
    BrowserHistory: BrowserHistory,
    BrowserLocation: BrowserHistory,
    BrowserHistoryOpts: BrowserHistory,
    Action: 'PUSH' | 'REPLACE' | 'POP'
  |}
}
