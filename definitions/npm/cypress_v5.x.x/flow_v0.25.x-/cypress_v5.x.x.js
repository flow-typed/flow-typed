declare type Cypress$FileContents = string | any[] | { ... };

declare type Cypress$HistoryDirection = "back" | "forward";

declare type Cypress$HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "OPTIONS"
  | "HEAD"
  | "TRACE"
  | "CONNECT";

declare type Cypress$ViewportPreset =
  | "macbook-15"
  | "macbook-13"
  | "macbook-11"
  | "ipad-2"
  | "ipad-mini"
  | "iphone-6+"
  | "iphone-6"
  | "iphone-5"
  | "iphone-4"
  | "iphone-3";

declare type Cypress$RequestBody = string | { ... };

declare type Cypress$ViewportOrientation = "portrait" | "landscape";

declare type Cypress$Env = { [key: string]: string, ... };

declare interface Cypress$Core {
  /**
   *
   * @see https://docs.cypress.io/api/cypress-api/custom-commands.html
   */
  addChildCommand(name: string, fn: Function): void,
  addDualCommand(name: string, fn: Function): void,
  addParentCommand(name: string, fn: Function): void,

  /**
   *
   * @see https://docs.cypress.io/api/cypress-api/config.html
   */
  config(): { ... },
  config(key: string): any,
  config(key: string, value: any): void,
  config(object: { ... }): void,

  /**
   * @see https://docs.cypress.io/api/cypress-api/env.html
   */
  env: Function,
  // Can't get overloading to work
  // env: () => Cypress$Env,
  // env: (name: string) => string,
  // env: (name: string, value: string) => void,
  // env: (object: Cypress$Env, ...rest: Array<void>) => void,

  /**
   * @see https://docs.cypress.io/api/utilities/_.html
   */
  _: { ... },
  /**
   * @see https://docs.cypress.io/api/utilities/$.html
   */
  $: () => any,
  $: { ... },
  /**
   * @see https://docs.cypress.io/api/utilities/blob.html
   */
  Blob: () => any,
  /**
   * @see https://docs.cypress.io/api/utilities/minimatch.html
   */
  minimatch: () => any,
  /**
   * @see https://docs.cypress.io/api/utilities/moment.html
   */
  moment: () => any,
  /**
   * @see https://docs.cypress.io/api/utilities/promise.html
   */
  Promise: ((resolve: Function, reject: Function) => void) => Promise<any>,
  /**
   * @see https://docs.cypress.io/api/utilities/sinon.html
   */
  sinon: { [key: string]: any, ... },

  /**
   * @see https://docs.cypress.io/api/cypress-api/cookies.html
   */
  Cookies: {|
    debug(enabled: boolean, options?: Cypress$DebugOptions): void,
    preserveOnce(...names: string[]): void,
    defaults(options: Cypress$CookieDefaults): void
  |},

  /**
   * @see https://docs.cypress.io/api/cypress-api/custom-commands.html
   */
  Commands: {|
    add: (
      name: string,
      options: {|
        prevSubject: boolean | string | Array<any>,
      |} | Function,
      callbackFn?: Function,
    ) => void,
    overwrite: (name: string, callbackFn: Function) => void,
  |},

  /**
   *
   * @see https://docs.cypress.io/api/cypress-api/dom.html
   */
  dom: {|
    isAttached: (element: any) => boolean,
    isDescendent: (parent: any, element: any) => boolean,
    isDetached: (element: any) => boolean,
    isDocument: (node: any) => boolean,
    isDom: (element: any) => boolean,
    isElement: (element: any) => boolean,
    isFocusable: (element: any) => boolean,
    isFocused: (element: any) => boolean,
    isHidden: (element: any) => boolean,
    isJquery: (element: any) => boolean,
    isScrollable: (element: any) => boolean,
    isVisible: (element: any) => boolean,
    isWindow: (element: any) => boolean,
    unwrap: (element: any) => Array<any>,
    wrap: (element: any) => any,
  |},

  /**
   * @see https://docs.cypress.io/api/events/catalog-of-events.html#Uncaught-Exceptions
   */
  on: (name: string, exe: (err: { message: string, ... }, runnable: any) => boolean | void) => void,

  /**
   *
   * @see https://docs.cypress.io/api/cypress-api/cypress-server.html
   */
  Server: {|
    defaults(options: Cypress$ServerOptions): void
  |},
}

declare interface Cypress$Chainable {
  /**
   * @see https://docs.cypress.io/api/commands/and.html
   */
  and(chainers: string): Cypress$Global,
  and(chainers: string, value: any): Cypress$Global,
  and(chainers: string, method: string, value: any): Cypress$Global,
  and(fn: Function): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/as.html
   */
  as(alias: string): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/blur.html
   */
  blur(options?: Cypress$BlurOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/check.html
   */
  check(options?: Cypress$CheckOptions): Cypress$Global,
  check(value: string): Cypress$Global,
  check(values: string[]): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/children.html
   */
  children(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  children(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/clear.html
   */
  clear(options?: Cypress$ClearOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/clearcookie.html
   */
  clearCookie(name: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/clearcookies.html
   */
  clearCookies(options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/clearlocalstorage.html
   */
  clearLocalStorage(): Cypress$Global,
  clearLocalStorage(key: string): Cypress$Global,
  clearLocalStorage(re: RegExp): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/click.html
   */
  click(options?: Cypress$ClickOptions): Cypress$Global,
  click(position: string, options?: Cypress$ClickOptions): Cypress$Global,
  click(x: number, y: number, options?: Cypress$ClickOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/clock.html
   */
  clock(): Cypress$Global,
  clock(options: Cypress$Loggable): Cypress$Global,
  clock(timestamp: number, options?: Cypress$Loggable): Cypress$Global,
  clock(timestamp: number, functionNames: $ReadOnlyArray<string>, options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/closest.html#Syntax
   */
  closest(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/contains.html
   */
  contains(text: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,
  contains(num: number): Cypress$Global,
  contains(re: RegExp): Cypress$Global,
  contains(
    selector: string,
    text: string,
    options?: Cypress$LoggableTimeoutable,
  ): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/dblclick.html
   */
  dblclick(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/debug.html
   */
  debug(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/document.html
   */
  document(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/each.html
   */
  each(fn: Function): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/end.html#Syntax
   */
  end(): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/eq.html
   */
  eq(index: number, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/exec.html
   */
  exec(command: string, options?: Cypress$ExecOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/filter.html
   */
  filter(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/find.html
   */
  find(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/first.html
   */
  first(options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/fixture.html
   */
  fixture(path: string, options?: Cypress$Timeoutable): Cypress$Global,
  fixture(
    path: string,
    encoding: string,
    options?: Cypress$Timeoutable,
  ): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/focus.html
   */
  focus(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/focused.html
   */
  focused(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/get.html
   */
  get(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,
  get(alias: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/getcookie.html
   */
  getCookie(name: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/getcookies.html
   */
  getCookies(options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/go.html
   */
  go(
    direction: Cypress$HistoryDirection,
    options?: Cypress$LoggableTimeoutable,
  ): Cypress$Global,
  go(num: number, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/hash.html
   */
  hash(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/invoke.html
   */
  invoke(functionName: string): Cypress$Global,
  invoke(functionName: string, ...args: any[]): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/its.html
   */
  its(propertyName: string): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/last.html
   */
  last(options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/location.html
   */
  location(options?: Cypress$Loggable): Cypress$Global,
  location(part: string, options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/log.html
   */
  log(message: string, args: any): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/next.html
   */
  next(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  next(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/not.html
   */
  not(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/parent.html
   */
  parent(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  parent(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/parents.html
   */
  parents(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  parents(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/pause.html
   */
  pause(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/prev.html
   */
  prev(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  prev(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see  https://on.cypress.io/api/readfile
   */
  readFile(filePath: string, options?: Cypress$Timeoutable): Cypress$Global,
  readFile(
    filePath: string,
    encoding: string,
    options?: Cypress$Timeoutable,
  ): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/reload.html
   */
  reload(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  reload(forceReload: boolean): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/request.html
   */
  request(url: string): Cypress$Global,
  request(url: string, body: Cypress$RequestBody): Cypress$Global,
  request(method: Cypress$HttpMethod, url: string): Cypress$Global,
  request(
    method: Cypress$HttpMethod,
    url: string,
    body: Cypress$RequestBody,
  ): Cypress$Global,
  request(options: Cypress$RequestOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/root.html
   */
  root(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/route.html
   */
  route(url: string): Cypress$Global,
  route(url: string, response: any): Cypress$Global,
  route(method: string, url: string): Cypress$Global,
  route(method: string, url: string, response: any): Cypress$Global,
  route(fn: Function): Cypress$Global,
  route(options: Cypress$RouteOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/screenshot.html
   */
  screenshot(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  screenshot(fileName: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/scrollintoview.html
   */
  scrollIntoView(options?: Cypress$ScrollIntoViewOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/scrollto.html
   */
  scrollTo(
    position: string,
    options?: Cypress$ScrollToOptions,
  ): Cypress$Global,
  scrollTo(
    x: number,
    y: number,
    options?: Cypress$ScrollToOptions,
  ): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/select.html
   */
  select(text: string, options?: Cypress$SelectOptions): Cypress$Global,
  select(value: string, options?: Cypress$SelectOptions): Cypress$Global,
  select(texts: string[], options?: Cypress$SelectOptions): Cypress$Global,
  select(values: string[], options?: Cypress$SelectOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/server.html
   */
  server(options?: Cypress$ServerOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/setcookie.html
   */
  setCookie(
    name: string,
    value: string,
    options?: Cypress$SetCookieOptions,
  ): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/should.html
   */
  should(chainers: string): Cypress$Global,
  should(chainers: string, value: any): Cypress$Global,
  should(chainers: string, method: string, value: any): Cypress$Global,
  should(fn: Function): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/siblings.html
   */
  siblings(options?: Cypress$LoggableTimeoutable): Cypress$Global,
  siblings(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/spy.html
   */
  spy(object: Object, method: string): SinonSpy,

  /**
   * @see https://docs.cypress.io/api/commands/spread.html
   */
  spread(fn: Function): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/submit.html
   */
  submit(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/then.html
   */
  then(fn: Function): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/tick.html
   */
  tick(timestamp: number): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/title.html
   */
  title(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/type.html
   */
  type(text: string, options?: Cypress$TypeOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/uncheck.html
   */
  uncheck(options?: Cypress$CheckOptions): Cypress$Global,
  uncheck(values: string[]): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/url.html
   */
  url(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/viewport.html
   */
  viewport(
    preset: Cypress$ViewportPreset,
    orientation?: Cypress$ViewportOrientation,
    options?: Cypress$Loggable,
  ): Cypress$Global,
  viewport(
    width: number,
    height: number,
    options?: Cypress$Loggable,
  ): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/visit.html
   */
  visit(url: string, options?: Cypress$VisitOptions): Cypress$Global,
  visit(options?: Cypress$VisitOptions): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/wait.html
   */
  wait(ms: number): Cypress$Global,
  wait(alias: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,
  wait(aliases: string[]): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/window.html
   */
  window(options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/within.html
   */
  within(fn: Function): Cypress$Global,
  within(options: Cypress$Loggable, fn: Function): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/wrap.html
   */
  wrap(object: { ... }, options?: Cypress$Loggable): Cypress$Global,

  /**
   * @see https://docs.cypress.io/api/commands/writefile.html
   */
  writeFile(
    filePath: string,
    contents: Cypress$FileContents,
    options?: Cypress$Timeoutable,
  ): Cypress$Global,
  writeFile(
    filePath: string,
    contents: Cypress$FileContents,
    encoding: string,
    options?: Cypress$Timeoutable,
  ): Cypress$Global,
}

declare interface Cypress$DebugOptions {
  verbose?: boolean
}

declare type Cypress$CookieDefaults = {|
  preserve: string | string[] | RegExp | Function
|}

declare interface Cypress$Loggable {
  log?: boolean
}

declare interface Cypress$Timeoutable {
  timeout?: number
}

declare type Cypress$LoggableTimeoutable = { ... } & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$BlurOptions = {|
  force?: boolean
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$CheckOptions = {|
  interval?: number,
  force?: boolean
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$ClearOptions = {|
  force?: boolean,
  interval?: number
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$ClickOptions = {|
  force?: boolean,
  multiple?: boolean,
  interval?: number
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$ExecOptions = {|
  failOnNonZeroExit?: boolean,
  env?: Object
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$RequestOptions = {|
  auth?: Object,
  body?: Cypress$RequestBody,
  failOnStatusCode?: boolean,
  followRedirect?: boolean,
  form?: boolean,
  gzip?: boolean,
  headers?: Object,
  method?: Cypress$HttpMethod,
  qs?: string,
  url: string
|} & Cypress$Loggable & Cypress$Timeoutable

declare interface Cypress$RouteOptions {
  method?: Cypress$HttpMethod,
  url?: string | RegExp,
  response?: any,
  status?: number,
  delay?: number,
  headers?: { ... },
  force404?: boolean,
  onRequest?: Function,
  onResponse?: Function,
  onAbort?: Function
}

declare type Cypress$ScrollIntoViewOptions = {|
  duration?: number,
  easing?: string,
  offset?: {| top: number, left: number |},
|} & Cypress$Loggable & Cypress$Timeoutable;

declare type Cypress$ScrollToOptions = {|
  duration?: number,
  easing?: string
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$SelectOptions = {|
  force?: boolean,
  interval?: number
|} & Cypress$Loggable & Cypress$Timeoutable

declare interface Cypress$ServerOptions {
  delay?: number,
  method?: Cypress$HttpMethod,
  status?: number,
  headers?: { ... },
  response?: any,
  onRequest?: Function,
  onResponse?: Function,
  onAbort?: Function,
  enable?: boolean,
  force404?: boolean,
  urlMatchingOptions?: { ... },
  whitelist?: Function
}

declare type Cypress$SetCookieOptions = {|
  path?: string,
  domain?: string,
  secure?: boolean,
  httpOnly?: boolean,
  expiry?: number
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$TypeOptions = {|
  delay?: number,
  force?: boolean,
  release?: boolean,
  interval?: number
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$VisitOptions = {|
  url?: string,
  method?: 'GET' | 'POST',
  body?: string | { ... },
  headers?: { ... },
  qs?: { ... },
  log?: boolean,
  auth?: { ... },
  failOnStatusCode?: boolean,
  onBeforeLoad?: Function,
  onLoad?: Function,
  retryOnStatusCodeFailure?: boolean,
  retryOnNetworkFailure?: boolean,
  timeout?: number,
|} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$Global = Cypress$Chainable;

/**
 * The global cypress object
 */
declare var cy: Cypress$Global;

/**
 * Global cypress object that wraps utility libraries and functions
 */
declare var Cypress: Cypress$Core;

declare var expect: Function;
