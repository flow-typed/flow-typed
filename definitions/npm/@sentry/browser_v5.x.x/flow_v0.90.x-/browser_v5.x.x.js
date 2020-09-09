// @flow

declare module '@sentry/browser' {
    declare export function addGlobalEventProcessor(callback: EventProcessor): void;
    declare export function addBreadcrumb(breadcrumb: Breadcrumb): void;
    declare export function captureException(
        message: mixed,
        severity?: $Values<typeof Severity>,
    ): void;
    declare export function captureMessage(
        message: mixed,
        severity?: $Values<typeof Severity>,
    ): void;
    declare export function configureScope((Scope) => void): void;
    declare export function getCurrentHub(): Hub;
    declare export function getHubFromCarrier(carrier: Carrier): Hub;

    declare export class Hub {
        constructor(client: BrowserClient<Options>): Hub;
        isOlderThan(version: number): boolean;
        bindClient(client?: BrowserClient<Options>): void;
        pushScope(): Scope;
        popScope(): boolean;
        withScope(callback: (scope: Scope) => void): void;
        getClient(): BrowserClient<Options> | void;
        captureException(exception: mixed, hint?: EventHint): string;
        captureMessage(message: string, level?: $Values<typeof Severity>, hint?: EventHint): string;
        captureEvent(event: Event, hint?: EventHint): string;
        lastEventId(): string | void;
        addBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint): void;
        setUser(user: User | null): void;
        setTags(tags: { [key: string]: string, ... }): void;
        setTag(key: string, value: string): void;
        setExtra(key: string, extra: any): void;
        setExtras(extras: { [key: string]: any, ... }): void;
        setContext(name: string, context: { [key: string]: mixed, ... } | null): void;
        configureScope(callback: (scope: Scope) => void): void;
        run(callback: (hub: Hub) => void): void;
        getIntegration<T>(integration: Class<Integration<T>>): Integration<T> | null;
        traceHeaders(): { [key: string]: string, ... };
        startSpan(span?: SpanContext, forceNoChild?: boolean): Span;
        startTransaction(context: TransactionContext): Transaction;
    }

    declare export class Scope {
        addEventProcessor(callback: EventProcessor): void;
        setUser(user: User | null): void;
        setTags(tags: {| [key: string]: string |}): void;
        setTag(key: string, value: string): void;
        setExtras(extras: { [key: string]: any, ... }): void;
        setExtra(key: string, extra: any): void;
        setFingerprint(fingerprint: $ReadOnlyArray<string>): void;
        setLevel(level: $Values<typeof Severity>): void;
        setTransaction(transaction?: string): void;
        setContext(name: string, context: {| [key: string]: mixed |}): void;
        setSpan(span?: Span): void;
        clear(): void;
        addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number): void;
        clearBreadcrumbs(): void;
    }

    declare export function setContext(
        name: string,
        context: {| [key: string]: mixed |} | null,
    ): void;
    declare export function setExtra(key: string, extra: any): void;
    declare export function setExtras(extras: { [key: string]: any, ... }): void;
    declare export function setTag(key: string, value: string): void;
    declare export function setTags(tags: {| [key: string]: string |}): void;
    declare export function setUser(user: User | null): void;
    declare export function withScope(callback: (scope: Scope) => void): void;

    declare export class BrowserClient<O: Options = Options> {
        constructor(options: O): BrowserClient<O>;
        captureException(exception: mixed, hint?: EventHint, scope?: Scope): string | void;
        captureMessage(
            message: string,
            level?: $Values<typeof Severity>,
            hint?: EventHint,
            scope?: Scope,
        ): string | void;
        captureEvent(event: SentryEvent, hint?: EventHint, scope?: Scope): string | void;
        getDsn(): Dsn | void;
        getOptions(): O;
        close(timeout?: number): Promise<boolean>;
        flush(timeout?: number): Promise<boolean>;
        getIntegration<T>(integration: Class<Integration<T>>): Integration<T> | null;
    }

    declare export var defaultIntegrations: $ReadOnlyArray<Integration<any>>;
    declare export function forceLoad(): void;
    declare export function init(Options): void;
    declare export function lastEventId(): string | void;
    declare export function onLoad(callback: () => void): void;
    declare export function showReportDialog(options: ReportDialogOptions): void;
    declare export function flush(timeout?: number): Promise<boolean>;
    declare export function close(timeout?: number): Promise<boolean>;
    declare export function wrap(fn: mixed): mixed;

    declare export var SDK_NAME: string;
    declare export var SDK_VERSION: string;

    declare export var Severity: {|
        +Fatal: 'fatal',
        +Error: 'error',
        +Warning: 'warning',
        +Log: 'log',
        +Info: 'info',
        +Debug: 'debug',
        +Critical: 'critical',
    |};
    declare export var Integrations: {|
        // Core
        +InboundFilters: Class<Integration<>>,
        +FunctionToString: Class<Integration<>>,

        // Browser
        +GlobalHandlers: Class<Integration<{|
            onerror?: boolean,
            onunhandledrejection?: boolean,
        |}>>,
        +TryCatch: Class<Integration<>>,
        +Breadcrumbs: Class<Integration<{|
            beacon?: boolean,
            console?: boolean,
            dom?: boolean,
            fetch?: boolean,
            history?: boolean,
            sentry?: boolean,
            xhr?: boolean,
        |}>>,
        +LinkedErrors: Class<Integration<{|
            key?: string,
            limit?: number,
        |}>>,
        +UserAgent: Class<Integration<>>,
    |};
    declare export var Transports: {|
        +BaseTransport: Class<Transport>,
        +FetchTransport: Class<Transport>,
        +XHRTransport: Class<Transport>,
    |};

    declare class Integration<O = {||}> {
        constructor(options?: O): Integration<O>;
        name: string;
        setupOnce(
            addGlobalEventProcessor: (callback: EventProcessor) => void,
            getCurrentHub: () => Hub,
        ): void;
    }

    declare export type LogLevel = {|
        +None: 0,
        +Error: 1,
        +Debug: 2,
        +Verbose: 3,
    |};
    declare export type Breadcrumb = {|
        +type?: 'default' | 'http' | 'error',
        +level?: $Values<typeof Severity>,
        +event_id?: string,
        +category?: string,
        +message?: string,
        +data?: { [string]: mixed, ... },
        +timestamp?: number,
    |};
    declare export type BreadcrumbHint = {| [key: string]: mixed |};
    declare export type User = {
        [key: string]: mixed,
        // At least one of these must be present, but there's no way to represent that in Flow without
        // enumerating every possible combination.
        +id?: string | number,
        +username?: string,
        +email?: string,
        +ip_address?: string,
        ...
    };
    declare export type SpanStatus = {|
        +Ok: 'ok',
        +DealineExceeded: 'deadline_exceeded',
        +Unauthenticated: 'unauthenticated',
        +PermissionDenied: 'permission_denied',
        +NotFound: 'not_found',
        +ResourceExhausted: 'resource_exhausted',
        +InvalidArgument: 'invalid_argument',
        +Unimplemented: 'unimplemented',
        +Unavailable: 'unavailable',
        +InternalError: 'internal_error',
        +UnknownError: 'unknown_error',
        +Cancelled: 'cancelled',
        +AlreadyExists: 'already_exists',
        +FailedPrecondition: 'failed_precondition',
        +Aborted: 'aborted',
        +OutOfRange: 'out_of_range',
        +DataLoss: 'data_loss',
    |};
    declare export type Mechanism = {|
        +type: string,
        +handled: boolean,
        +data?: { [key: string]: string | boolean, ... },
        +synthetic?: boolean,
    |};
    declare export type StackFrame = {|
        +filename?: string,
        +function?: string,
        +module?: string,
        +platform?: string,
        +lineno?: number,
        +colno?: number,
        +abs_path?: string,
        +context_line?: string,
        +pre_context?: $ReadOnlyArray<string>,
        +post_context?: $ReadOnlyArray<string>,
        +in_app?: boolean,
        +vars?: { [key: string]: mixed, ... },
    |};
    declare export type Stacktrace = {|
        +frames?: $ReadOnlyArray<StackFrame>,
        +frames_omitted?: [number, number],
    |};
    declare export type Exception = {|
        +type?: string,
        +value?: string,
        +mechanism?: Mechanism,
        +module?: string,
        +thread_id?: number,
        +stacktrace?: Stacktrace,
    |};

    declare export type SpanContext = {|
        description?: string;
        op?: string;
        status?: string;
        parentSpanId?: string;
        sampled?: boolean;
        spanId?: string;
        traceId?: string;
        tags?: { [key: string]: string, ... };
        data?: { [key: string]: any, ... };
        startTimestamp?: number;
        endTimestamp?: number;
    |};
    declare export type Span = {|
        ...SpanContext,
        finish(useLastSpanTimestamp?: boolean): string | void,
        toTraceparent(): string,
        getTraceContext(): {| [key: string]: mixed |},
        toJSON(): {| [key: string]: mixed |},
        setTag(key: string, value: string): void,
        setData(key: string, value: mixed): void,
        setStatus(status: $Values<SpanStatus>): void,
        setHttpStatus(httpStatus: number): void,
        isSuccess(): boolean,
    |};
    declare export type TransactionContext = {|
        ...SpanContext,
        name: string;
        trimEnd?: boolean;
    |};

    declare export type Transaction = {|
        ...TransactionContext,
        ...Span,
        spanId: string;
        traceId: string;
        startTimestamp: number;
        tags: { [key: string]: string, ... };
        data: { [key: string]: any, ... };
        setName(name: string): void;
    |};

    declare export type DsnProtocol = 'http' | 'https';
    declare export type DsnComponents = {|
        +protocol: DsnProtocol,
        +user: string,
        +pass?: string,
        +host: string,
        +port?: string,
        +path?: string,
        +projectId: string,
    |};
    declare export type DsnLike = string | DsnComponents;
    declare export type Dsn = { toString(withPassword: boolean): string, ...DsnComponents, ... };
    declare class Transport {
        constructor(options: TransportOptions): Transport;
        sendEvent(event: Event): Promise<SentryResponse>;
        close(timeout?: number): Promise<boolean>;
    }
    declare export type TransportOptions = {|
        +dsn: DsnLike,
        +headers?: { [key: string]: string, ... },
        +httpProxy?: string,
        +httpsProxy?: string,
        +caCerts?: string,
    |};

    declare export type Status = {|
      +Unknown: 'unknown',
      +Skipped: 'skipped',
      +Success: 'success',
      +RateLimit: 'rate_limit',
      +Invalid: 'invalid',
      +Failed: 'failed',
    |};
    declare export type SentryRequest = {|
        +url?: string,
        +method?: string,
        +data?: mixed,
        +query_string?: string,
        +cookies?: { [key: string]: string, ... },
        +env?: { [key: string]: string, ... },
        +headers?: { [key: string]: string, ... },
    |};
    declare export type SentryResponse = {|
        +status: $Values<Status>,
        +event?: SentryEvent,
        +reason?: string,
    |};
    declare export type EventType = 'transaction';
    declare export type SentryEvent = {|
        +event_id?: string,
        +message?: string,
        +timestamp?: number,
        +start_timestamp?: number,
        +level?: $Values<typeof Severity>,
        +platform?: string,
        +logger?: string,
        +server_name?: string,
        +release?: string,
        +dist?: string,
        +environment?: string,
        +sdk?: SdkInfo,
        +request?: SentryRequest,
        +transaction?: string,
        +modules?: { [key: string]: string, ... },
        +fingerprint?: $ReadOnlyArray<string>,
        +exception?: { values?: $ReadOnlyArray<Exception>, ... },
        +stacktrace?: Stacktrace,
        +breadcrumbs?: $ReadOnlyArray<Breadcrumb>,
        +contexts?: {| [key: string]: { ... } |},
        +tags?: {| [key: string]: string |},
        +extra?: {| [key: string]: any |},
        +user?: User,
        +type?: EventType,
        +spans?: $ReadOnlyArray<Span>,
    |};
    declare export type EventHint = {|
        +event_id?: string,
        +syntheticException?: Error | null,
        +originalException?: Error | string | null,
        +data?: mixed,
    |};
    declare export type EventProcessor = (
        event: SentryEvent,
        hint?: EventHint,
    ) => Promise<SentryEvent | null> | SentryEvent | null;
    declare export type Package = {|
        +name: string,
        +version: string,
    |};
    declare export type SdkInfo = {|
        +name: string,
        +version: string,
        +integrations?: $ReadOnlyArray<string>,
        +packages?: $ReadOnlyArray<Package>,
    |};
    declare export type Carrier = {|
        +__SENTRY__?: {|
            hub?: Hub,
            extensions?: { [key: string]: mixed, ... },
        |},
    |};

    declare export type Options = {|
        +debug?: boolean,
        +enabled?: boolean,
        +dsn?: string,
        +defaultIntegrations?: false,
        +ignoreErrors?: $ReadOnlyArray<string | RegExp>,
        +transport?: Class<Transport>,
        +transportOptions?: TransportOptions,
        +release?: string,
        +environment?: string,
        +dist?: string,
        +maxBreadcrumbs?: number,
        +logLevel?: $Values<LogLevel>,
        +sampleRate?: number,
        +tracesSampleRate?: number,
        +attachStacktrace?: boolean,
        +maxValueLength?: number,
        +beforeSend?: (
            event: SentryEvent,
            hint?: EventHint,
        ) => Promise<SentryEvent | null> | SentryEvent | null,

        +denyUrls?: $ReadOnlyArray<string | RegExp>,
        +allowUrls?: $ReadOnlyArray<string | RegExp>,
        // Deprecated as of 5.18.0, prefer the allowUrls/denyUrls instead
        +blacklistUrls?: $ReadOnlyArray<string | RegExp>,
        +whitelistUrls?: $ReadOnlyArray<string | RegExp>,
        // This really should be typed as:
        //    | $ReadOnlyArray<Integration<any>>
        //    | (($ReadOnlyArray<Integration<any>>) => $ReadOnlyArray<Integration<any>>)
        // but we must support integrations from @sentry/integrations as well
        // as custom integrations. Since cross-package imports aren't allowed
        // and classes are nominally typed, using `any` seems like our only
        // option here.
        +integrations?: any,
        +beforeBreadcrumb?: (breadcrumb: Breadcrumb, hint?: BreadcrumbHint) => Breadcrumb | null,
        +_experiments?: { [key: string]: mixed, ... },
    |};

    declare export type ReportDialogOptions = {|
        [key: string]: mixed,
        +eventId?: string,
        +dsn?: DsnLike,
        +user?: {|
            email?: string,
            name?: string,
        |},
        +lang?: string,
        +title?: string,
        +subtitle?: string,
        +subtitle2?: string,
        +labelName?: string,
        +labelEmail?: string,
        +labelComments?: string,
        +labelClose?: string,
        +labelSubmit?: string,
        +errorGeneric?: string,
        +errorFormEntry?: string,
        +successMessage?: string,
        +onLoad?: () => void,
    |};
}
