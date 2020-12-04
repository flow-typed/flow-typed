// @flow

declare module '@sentry/integrations' {
    declare export var Angular: Class<Integration<>>;
    declare export var CaptureConsole: Class<Integration<{|
        levels?: $ReadOnlyArray<$Values<Severity>>,
    |}>>;
    declare export var Debug: Class<Integration<{|
        debugger?: boolean,
        stringify?: boolean,
    |}>>;
    declare export var Dedupe: Class<Integration<>>;
    declare export var Ember: Class<Integration<>>;
    declare export var ExtraErrorData: Class<Integration<{|
        depth?: number,
    |}>>;
    declare export var ReportingObserver: Class<Integration<{|
        types?: $ReadOnlyArray<'crash' | 'deprecation' | 'intervention'>,
    |}>>;
    declare export var RewriteFrames: Class<Integration<{|
        root?: string,
        iteratee?: (frame: StackFrame) => string,
    |}>>;
    declare export var SessionTiming: Class<Integration<>>;
    declare export var Transaction: Class<Integration<>>;
    declare export var Vue: Class<Integration<{|
        Vue?: mixed,
        attachProps?: boolean,
        logErrors?: boolean,
    |}>>;

    declare class Integration<O = {||}> {
        constructor(options?: O): Integration<O>;
        name: string;
        setupOnce(
            addGlobalEventProcessor: (callback: EventProcessor) => void,
            getCurrentHub: () => Hub,
        ): void;
    }
    declare type Breadcrumb = {|
        +type?: 'default' | 'http' | 'error',
        +level?: $Values<Severity>,
        +event_id?: string,
        +category?: string,
        +message?: string,
        +data?: { [string]: mixed, ... },
        +timestamp?: number,
    |};
    declare type BreadcrumbHint = {| [key: string]: mixed |};
    declare type User = {
        [key: string]: mixed,
        // At least one of these must be present, but there's no way to represent that in Flow without
        // enumerating every possible combination.
        +id?: string,
        +username?: string,
        +email?: string,
        +ip_address?: string,
        ...
    };
    declare type SpanStatus = {|
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
    declare type Mechanism = {|
        +type: string,
        +handled: boolean,
        +data?: { [key: string]: string | boolean, ... },
        +synthetic?: boolean,
    |};
    declare type StackFrame = {|
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
    declare type Stacktrace = {|
        +frames?: $ReadOnlyArray<StackFrame>,
        +frames_omitted?: [number, number],
    |};
    declare type Exception = {|
        +type?: string,
        +value?: string,
        +mechanism?: Mechanism,
        +module?: string,
        +thread_id?: number,
        +stacktrace?: Stacktrace,
    |};
    declare type Span = {|
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

    declare type SentryRequest = {|
        +url?: string,
        +method?: string,
        +data?: mixed,
        +query_string?: string,
        +cookies?: { [key: string]: string, ... },
        +env?: { [key: string]: string, ... },
        +headers?: { [key: string]: string, ... },
    |};
    declare type EventType = 'transaction';
    declare type SentryEvent = {|
        +event_id?: string,
        +message?: string,
        +timestamp?: number,
        +start_timestamp?: number,
        +level?: $Values<Severity>,
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
        +extra?: {| [key: string]: mixed |},
        +user?: User,
        +type?: EventType,
        +spans?: $ReadOnlyArray<Span>,
    |};
    declare type EventHint = {|
        +event_id?: string,
        +syntheticException?: Error | null,
        +originalException?: Error | string | null,
        +data?: mixed,
    |};
    declare type EventProcessor = (
        event: SentryEvent,
        hint?: EventHint,
    ) => Promise<SentryEvent | null> | SentryEvent | null;
    declare type Package = {|
        +name: string,
        +version: string,
    |};
    declare type SdkInfo = {|
        +name: string,
        +version: string,
        +integrations?: $ReadOnlyArray<string>,
        +packages?: $ReadOnlyArray<Package>,
    |};
    declare type Severity = {|
        +Fatal: 'fatal',
        +Error: 'error',
        +Warning: 'warning',
        +Log: 'log',
        +Info: 'info',
        +Debug: 'debug',
        +Critical: 'critical',
    |};
}
