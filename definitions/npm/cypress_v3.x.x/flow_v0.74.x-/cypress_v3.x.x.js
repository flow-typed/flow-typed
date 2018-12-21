// @flow

import { type SinonSpy } from 'sinon';

declare type Cypress$FileContents = string | any[] | Object;

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


declare type Cypress$RequestBody = string | Object;

declare type Cypress$ViewportOrientation = "portrait" | "landscape";

declare interface Cypress$Core {

    /**
     *
     * @see  https://on.cypress.io/api/config
     */
    config(): Object,
    config(key: string): any,
    config(key: string, value: any): void,
    config(object: Object): void,

    /**
     *
     * @see  https://on.cypress.io/api/env
     */
    env(): Object,
    env(key: string): any,
    env(key: string, value: any): void,
    env(object: Object): void,

    log(params: {methodName: string, displayName: string, message: string, $el? :string, consoleProps: () => {}}): void,
    /**
     *
     * @see  https://on.cypress.io/api/commands
     */
    addChildCommand(name: string, fn: Function): void,
    addDualCommand(name: string, fn: Function): void,
    addParentCommand(name: string, fn: Function): void,
    _: any,
    $: any,
    minimatch: any,
    moment: any,
    Blob: any,
    Promise: any,

    /**
     *
     * @see  https://on.cypress.io/api/cookies
     */
    Cookies: {
        debug(enabled: boolean, options?: Cypress$DebugOptions): void,
        preserveOnce(...names: string[]): void,
        defaults(options: Cypress$CookieDefaults): void
    },

    /**
     *
     * @see  https://on.cypress.io/api/dom
     */
    Dom: {
        isHidden(element: Object): boolean
    },

    /**
     *
     * @see  https://on.cypress.io/api/api-server
     */
    Server: {
        defaults(options: Cypress$ServerOptions): void
    }
}

declare interface Cypress$Chainable {

    /**
     *
     * @see  https://on.cypress.io/api/and
     */
    and(chainers: string): Cypress$Global,
    and(chainers: string, value: any): Cypress$Global,
    and(chainers: string, method: string, value: any): Cypress$Global,
    and(fn: Function): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/as
     */
    as(alias: string): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/blur
     */
    blur(options?: Cypress$BlurOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/check
     */
    check(options?: Cypress$CheckOptions): Cypress$Global,
    check(value: string): Cypress$Global,
    check(values: string[]): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/children
     */
    children(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    children(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/clear
     */
    clear(options?: Cypress$ClearOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/clearcookie
     */
    clearCookie(name: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/clearcookies
     */
    clearCookies(options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/clearlocalstorage
     */
    clearLocalStorage(): Cypress$Global,
    clearLocalStorage(key: string): Cypress$Global,
    clearLocalStorage(re: RegExp): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/click
     */
    click(options?: Cypress$ClickOptions): Cypress$Global,
    click(position: string, options?: Cypress$ClickOptions): Cypress$Global,
    click(x: number, y: number, options?: Cypress$ClickOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/clock
     */
    clock(): Cypress$Global,
    clock(options: Cypress$Loggable): Cypress$Global,
    clock(timestamp: number, options?: Cypress$Loggable): Cypress$Global,
    clock(timestamp: number, functionNames: $ReadOnlyArray<string>, options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/closest
     */
    closest(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/contains
     */
    contains(text: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,
    contains(num: number): Cypress$Global,
    contains(re: RegExp): Cypress$Global,
    contains(
        selector: string,
        text: string,
        options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/dblclick
     */
    dblclick(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/debug
     */
    debug(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/document
     */
    document(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/each
     */
    each(fn: Function): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/end
     */
    end(): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/eq
     */
    eq(index: number, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/exec
     */
    exec(command: string, options?: Cypress$ExecOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/filter
     */
    filter(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/find
     */
    find(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/first
     */
    first(options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/fixture
     */
    fixture(path: string, options?: Cypress$Timeoutable): Cypress$Global,
    fixture(
        path: string,
        encoding: string,
        options?: Cypress$Timeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/focus
     */
    focus(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/focused
     */
    focused(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/get
     */
    get(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,
    get(alias: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/getcookie
     */
    getCookie(name: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/getcookies
     */
    getCookies(options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/go
     */
    go(
        direction: Cypress$HistoryDirection,
        options?: Cypress$LoggableTimeoutable): Cypress$Global,
    go(num: number, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/hash
     */
    hash(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/invoke
     */
    invoke(functionName: string): Cypress$Global,
    invoke(functionName: string, ...args: any[]): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/its
     */
    its(propertyName: string): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/last
     */
    last(options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/location
     */
    location(options?: Cypress$Loggable): Cypress$Global,
    location(part: string, options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/log
     */
    log(message: string, args: any): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/next
     */
    next(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    next(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/not
     */
    not(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/parent
     */
    parent(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    parent(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/parents
     */
    parents(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    parents(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/pause
     */
    pause(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/prev
     */
    prev(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    prev(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/readfile
     */
    readFile(filePath: string, options?: Cypress$Timeoutable): Cypress$Global,
    readFile(
        filePath: string,
        encoding: string,
        options?: Cypress$Timeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/reload
     */
    reload(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    reload(forceReload: boolean): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/request
     */
    request(url: string): Cypress$Global,
    request(url: string, body: Cypress$RequestBody): Cypress$Global,
    request(method: Cypress$HttpMethod, url: string): Cypress$Global,
    request(
        method: Cypress$HttpMethod,
        url: string,
        body: Cypress$RequestBody): Cypress$Global,
    request(options: Cypress$RequestOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/root
     */
    root(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/route
     */
    route(url: string): Cypress$Global,
    route(url: string, response: any): Cypress$Global,
    route(method: string, url: string): Cypress$Global,
    route(method: string, url: string, response: any): Cypress$Global,
    route(fn: Function): Cypress$Global,
    route(options: Cypress$RouteOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/screenshot
     */
    screenshot(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    screenshot(fileName: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/scrollto
     */
    scrollTo(
        position: string,
        options?: Cypress$ScrollToOptions
    ): Cypress$Global,
    scrollTo(
        x: number,
        y: number,
        options?: Cypress$ScrollToOptions
    ): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/select
     */
    select(text: string, options?: Cypress$SelectOptions): Cypress$Global,
    select(value: string, options?: Cypress$SelectOptions): Cypress$Global,
    select(texts: string[], options?: Cypress$SelectOptions): Cypress$Global,
    select(values: string[], options?: Cypress$SelectOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/server
     */
    server(options?: Cypress$ServerOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/setcookie
     */
    setCookie(
        name: string,
        value: string,
        options?: Cypress$SetCookieOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/should
     */
    should(chainers: string): Cypress$Global,
    should(chainers: string, value: any): Cypress$Global,
    should(chainers: string, method: string, value: any): Cypress$Global,
    should(fn: Function): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/siblings
     */
    siblings(options?: Cypress$LoggableTimeoutable): Cypress$Global,
    siblings(selector: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/spy
     */
    spy(object: Object, method: string): SinonSpy,

    /**
     *
     * @see  https://on.cypress.io/api/spread
     */
    spread(fn: Function): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/submit
     */
    submit(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/then
     */
    then(fn: Function): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/tick
     */
    tick(timestamp: number): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/title
     */
    title(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/type
     */
    type(text: string, options?: Cypress$TypeOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/uncheck
     */
    uncheck(options?: Cypress$CheckOptions): Cypress$Global,
    uncheck(values: string[]): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/url
     */
    url(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/viewport
     */
    viewport(
        preset: Cypress$ViewportPreset,
        orientation?: Cypress$ViewportOrientation,
        options?: Cypress$Loggable
    ): Cypress$Global,
    viewport(
        width: number,
        height: number,
        options?: Cypress$Loggable
    ): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/visit
     */
    visit(url: string, options?: Cypress$VisitOptions): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/wait
     */
    wait(ms: number): Cypress$Global,
    wait(alias: string, options?: Cypress$LoggableTimeoutable): Cypress$Global,
    wait(aliases: string[]): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/window
     */
    window(options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/within
     */
    within(fn: Function): Cypress$Global,
    within(options: Cypress$Loggable, fn: Function): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/wrap
     */
    wrap(object: Object, options?: Cypress$Loggable): Cypress$Global,

    /**
     *
     * @see  https://on.cypress.io/api/writefile
     */
    writeFile(
        filePath: string,
        contents: Cypress$FileContents,
        options?: Cypress$Timeoutable): Cypress$Global,
    writeFile(
        filePath: string,
        contents: Cypress$FileContents,
        encoding: string,
        options?: Cypress$Timeoutable): Cypress$Global
}

declare interface Cypress$DebugOptions {
    verbose?: boolean
}

declare interface Cypress$CookieDefaults {
    whitelist?: string | string[] | RegExp | Function
}

declare interface Cypress$Loggable {
    log?: boolean
}

declare interface Cypress$Timeoutable {
    timeout?: number
}

declare type Cypress$LoggableTimeoutable = {} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$BlurOptions = {
    force?: boolean
} & Cypress$Loggable


declare type Cypress$CheckOptions = {
    interval?: number,
    force?: boolean
} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$ClearOptions = {
    force?: boolean,
    interval?: number
} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$ClickOptions = {
    force?: boolean,
    multiple?: boolean,
    interval?: number
} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$ExecOptions = {
    failOnNonZeroExit?: boolean,
    env?: Object
} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$RequestOptions = {
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
} & Cypress$Loggable & Cypress$Timeoutable


declare interface Cypress$RouteOptions {
    method?: Cypress$HttpMethod,
    url?: string | RegExp,
    response?: any,
    status?: number,
    delay?: number,
    headers?: Object,
    force404?: boolean,
    onRequest?: Function,
    onResponse?: Function,
    onAbort?: Function
}

declare type Cypress$ScrollToOptions = {
    duration?: number,
    easing?: string
} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$SelectOptions = {
    force?: boolean,
    interval?: number
} & Cypress$Loggable & Cypress$Timeoutable


declare interface Cypress$ServerOptions {
    delay?: number,
    method?: Cypress$HttpMethod,
    status?: number,
    headers?: Object,
    response?: any,
    onRequest?: Function,
    onResponse?: Function,
    onAbort?: Function,
    enable?: boolean,
    force404?: boolean,
    urlMatchingOptions?: Object,
    whitelist?: Function
}

declare type Cypress$SetCookieOptions = {
    path?: string,
    domain?: string,
    secure?: boolean,
    httpOnly?: boolean,
    expiry?: number
} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$TypeOptions = {
    delay?: number,
    force?: boolean,
    release?: boolean,
    interval?: number
} & Cypress$Loggable & Cypress$Timeoutable


declare type Cypress$VisitOptions = {
    onBeforeLoad?: Function,
    onLoad?: Function
} & Cypress$Loggable & Cypress$Timeoutable

declare type Cypress$Global = Cypress$Chainable;
