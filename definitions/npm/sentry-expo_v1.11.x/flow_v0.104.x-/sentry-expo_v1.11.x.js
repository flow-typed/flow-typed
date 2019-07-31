/**
 * sentry-expo primarily delegates to the `react-native-sentry` package.
 * Definitions pulled from https://github.com/getsentry/react-native-sentry/blob/master/lib/Sentry.d.ts.
 */
declare module "sentry-expo" {
  declare type CallbackFn = (...args: any[]) => void

  declare type SentryBreadcrumbType = "navigation" | "http";

  declare export type SentryBreadcrumb = {
    message?: string,
    category?: string,
    level?: SentrySeverity,
    data?: {...},
    type?: SentryBreadcrumbType,
    ...
  }

  declare export type SentrySeverity = "fatal" | "error" | "warning" | "info" | "debug" | "critical"

  declare type SentryLog = {
    None: 0,
    Error: 1,
    Debug: 2,
    Verbose: 3,
    ...
  }

  declare type SentryOptions = {
    logLevel?: SentryLog,
    instrument?: boolean,
    disableNativeIntegration?: boolean,
    ignoreModulesExclude?: string[],
    ignoreModulesInclude?: string[],
    ...
  }

  declare export default class Sentry {
    install(): void;

    static config(dsn: string, options?: SentryOptions): Sentry;

    static isNativeClientAvailable(): boolean;

    static crash(): void;

    static nativeCrash(): void;

    static setEventSentSuccessfully(callback: CallbackFn): void;

    static setShouldSendCallback(callback: CallbackFn): void;

    static setDataCallback(callback: CallbackFn): void;

    static setUserContext(user: {
      id?: string,
      username?: string,
      email?: string,
      extra?: {...},
      ...
    }): void;

    static setTagsContext(tags: {...}): void;

    static setExtraContext(extra: {...}): void;

    static captureMessage(message: string, options?: {...}): void;

    static captureException(ex: Error, options?: {...}): void;

    static captureBreadcrumb(breadcrumb: SentryBreadcrumb): void;

    static clearContext(): Promise<void>;

    static context(func: CallbackFn, ...args: any[]): void;
    static context(options: {...}, func: CallbackFn, ...args: any[]): void;

    static wrap(func: CallbackFn): CallbackFn;
    static wrap(options: {...}, func: CallbackFn): CallbackFn;

    static lastException(): {...};
    static lastException(): null;

    static lastEventId(): {...};
    static lastEventId(): null;

    static setRelease(release: string): void;

    static setDist(dist: string): void;

    static setVersion(version: string): void;
  }
}
