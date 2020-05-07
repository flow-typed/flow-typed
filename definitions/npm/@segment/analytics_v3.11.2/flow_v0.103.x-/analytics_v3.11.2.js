/**
 * Adapted from a Flowgen Generation 
 * from a Typescript Definition @ https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/segment-analytics/index.d.ts
 * Flowgen v1.10.0
 * 
 * Segment provides their library via snippet load (https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/quickstart/), instead of 
 * via NPM modules. It is recommended to define the something similar to the following lines in your codebase: 
 * 
 * declare type Window = {
 *   analytics: SegmentAnalytics$AnalyticsJS,
 *    [key: any]: any, // Keep rest of elements untyped (default)
 *    ...
 * }
 * 
 * declare var window: Window;
 * 
 */
declare type SegmentAnalytics$SegmentOpts = {
  integrations?: any,
  anonymousId?: string,
  context: { 
    [key: any]: any,
    ...
  },
  ...
}

declare type SegmentAnalytics$CookieOptions = {
  maxage?: number,
  domain?: string,
  path?: string,
  secure?: boolean,
  ...
}

declare type SegmentAnalytics$MetricsOptions = {
  host?: string,
  sampleRate?: number,
  flushTimer?: number,
  maxQueueSize?: number,
  ...
}

declare type SegmentAnalytics$StoreOptions = {
  enabled?: boolean,
  ...
}

declare type SegmentAnalytics$UserOptions = {
  cookie?: {
    key: string,
    oldKey: string,
    ...
  },
  localStorage?: {
    key: string,
    ...
  },
  persist?: boolean;
  ...
}

declare type SegmentAnalytics$GroupOptions = {
  cookie?: {
    key: string,
    ...
  },
  localStorage?: {
    key: string,
    ...
  },
  persist?: boolean,
  ...
}

declare type SegmentAnalytics$InitOptions = {
  cookie?: SegmentAnalytics$CookieOptions,
  metrics?: SegmentAnalytics$MetricsOptions,
  localStorage?: SegmentAnalytics$StoreOptions,
  user?: SegmentAnalytics$UserOptions,
  group?: SegmentAnalytics$GroupOptions,
  integrations?: {
    All?: boolean,
    [integration: string]: boolean | void,
    ...
  },
  ...
}

declare type SegmentAnalytics$IntegrationsSettings = {
  [key: string]: any;
  ...
}

declare interface SegmentAnalytics$AnalyticsJS {
  load(writeKey: string, options?: SegmentAnalytics$SegmentOpts): void;
  identify(
    userId: string,
    traits?: Object,
    options?: SegmentAnalytics$SegmentOpts,
    callback?: () => void
  ): void;
  track(
    event: string,
    properties?: Object,
    options?: SegmentAnalytics$SegmentOpts,
    callback?: () => void
  ): void;
  page(
    category?: string,
    name?: string,
    properties?: Object,
    options?: SegmentAnalytics$SegmentOpts,
    callback?: () => void
  ): void;
  page(
    name?: string,
    properties?: Object,
    options?: SegmentAnalytics$SegmentOpts,
    callback?: () => void
  ): void;
  group(
    groupId: string,
    traits?: Object,
    options?: SegmentAnalytics$SegmentOpts,
    callback?: () => void
  ): void;
  alias(
    userId: string,
    previousId?: string,
    options?: SegmentAnalytics$SegmentOpts,
    callback?: () => void
  ): void;
  trackLink(
    elements: JQuery | Element[] | Element,
    event:
      | string
      | {
          (elm: Element): string,
          ...
        },
    properties?:
      | Object
      | {
          (elm: Element): Object,
          ...
        }
  ): void;
  trackForm(
    elements: JQuery | Element[] | Element,
    event:
      | string
      | {
          (elm: Element): string,
          ...
        },
    properties?:
      | Object
      | {
          (elm: Element): Object,
          ...
        }
  ): void;
  ready(callback: () => void): void;
  reset(): void;
  user(): {
    id(): string,
    logout(): void,
    reset(): void,
    anonymousId(newId?: string): string,
    traits(newTraits?: Object): void,
    ...
  };
  group(): {
    id(): string,
    traits(newTraits?: Object): void,
    ...
  };
  debug(state?: boolean): void;
  on(
    event: string,
    callback: {
      (
        event: string,
        properties: Object,
        options: SegmentAnalytics$SegmentOpts
      ): void,
      ...
    }
  ): void;
  timeout(milliseconds: number): void;
}
