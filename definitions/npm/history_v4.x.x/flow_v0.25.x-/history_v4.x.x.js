declare module "history/createBrowserHistory" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  declare export type BrowserLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: string,
    key: string,
  };

  declare export type BrowserHistory = {
    length: number,
    location: BrowserLocation,
    action: Action,
    push: (path: string, Array<mixed>) => void,
    replace: (path: string, Array<mixed>) => void,
    go: (n: number) => void,
    goBack: () => void,
    goForward: () => void,
    listen: Function,
    block: (message: string) => Unblock,
    block: ((location: BrowserLocation, action: Action) => string) => Unblock,
    push: (path: string) => void,
  };

  declare type HistoryOpts = {
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
  };

  declare export default (opts?: HistoryOpts) => BrowserHistory;
}

declare module "history/createMemoryHistory" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  declare export type MemoryLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: string,
    key: string,
  };

  declare export type MemoryHistory = {
    length: number,
    location: MemoryLocation,
    action: Action,
    index: number,
    entries: Array<string>,
    push: (path: string, Array<mixed>) => void,
    replace: (path: string, Array<mixed>) => void,
    go: (n: number) => void,
    goBack: () => void,
    goForward: () => void,
    // Memory only
    canGo: (n: number) => boolean,
    listen: Function,
    block: (message: string) => Unblock,
    block: ((location: MemoryLocation, action: Action) => string) => Unblock,
    push: (path: string) => void,
  };

  declare type HistoryOpts = {
    initialEntries?: Array<string>,
    initialIndex?: number,
    keyLength?: number,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
  };

  declare export default (opts?: HistoryOpts) => MemoryHistory;
}

declare module "history/createHashHistory" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  declare export type HashLocation = {
    pathname: string,
    search: string,
    hash: string,
  };

  declare export type HashHistory = {
    length: number,
    location: HashLocation,
    action: Action,
    push: (path: string, Array<mixed>) => void,
    replace: (path: string, Array<mixed>) => void,
    go: (n: number) => void,
    goBack: () => void,
    goForward: () => void,
    listen: Function,
    block: (message: string) => Unblock,
    block: ((location: HashLocation, action: Action) => string) => Unblock,
    push: (path: string) => void,
  };

  declare type HistoryOpts = {
    basename?: string,
    hashType: "slash" | "noslash" | "hashbang",
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
  };

  declare export default (opts?: HistoryOpts) => HashHistory;
}
