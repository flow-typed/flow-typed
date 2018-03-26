// @flow
/* eslint-disable flowtype/no-weak-types, flowtype/type-id-match, flowtype/sort-keys */

type $npm$newrelic$Rule = {|
  name: string,
  ignore: string | RegExp,
  enforce_backstop?: boolean,
|};
type $npm$newrelic$Config = {|
  app_name?: string | Array<string>,
  license_key: string,
  host?: string,
  port?: number,
  proxy?: string,
  proxy_host?: string,
  proxy_port?: number,
  proxy_user?: string,
  proxy_pass?: string,
  ignore_server_configuration?: boolean,
  agent_enabled?: boolean,
  apdex_t?: number,
  capture_params?: boolean,
  ignored_params?: string,
  ssl?: boolean,
  certficates?: Array<string>,
  high_security?: boolean,
  labels?: string | { [string]: string },

  browser_monitoring?: {|
    enabled: boolean,
  |},

  logging?: {|
    enabled?: boolean,
    level?: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace',
    filepath?: string,
  |},

  audit?: {|
    enabled: boolean,
    endpoints?: Array<|'metric_data'
      | 'error_data'
      | 'analytic_event_data'
      | 'custom_event_data'
      | 'error_event_data'
      | 'transaction_sample_data'
      | 'sql_trace_data'
      | 'connect'
      | 'agent_settings'
      | 'get_redirect_host'
      | 'shutdown'>,
  |},

  custom_parameters_enabled?: boolean,
  custom_events_enabled?: boolean,
  notice_error_enabled?: boolean,

  error_collector?: {|
    enabled?: boolean,
    ignore_status_codes?: Array<number>,
  |},

  transaction_tracer?: {|
    enabled?: boolean,
    transaction_threshold?: number,
    top_n?: number,
    record_sql?: 'off' | 'obfuscated' | 'raw',
    explain_threshold?: number,
  |},

  debug?: {|
    internal_metrics?: boolean,
    tracer_tracing?: boolean,
  |},

  rules?: Array<$npm$newrelic$Rule>,

  custom_insights_events?: {|
    enabled?: boolean,
    max_samples_stored?: number,
  |},

  slow_sql?: {|
    enabled?: boolean,
    max_samples?: number,
  |},

  process_host ?: {|
    display_name?: string,
    ipv_preference?: 6 | 9,
  |},

  datastore_tracer?: {|
    instance_reporting?: {|
      enabled?: boolean,
    |},
    database_name_reporting?: {|
      enabled?: boolean,
    |},
  |},
|};

// @see https://docs.newrelic.com/docs/agents/nodejs-agent/supported-features/nodejs-agent-api
declare module 'newrelic' {
  declare type Config = $npm$newrelic$Config;

  declare function setTransactionName(name: string): void;
  declare function setControllerName(name: string, action?: mixed): void; // TODO type action

  declare function addNamingRule(pattern: string, name: string): void;
  declare function addIgnoringRule(pattern: string): void;

  declare function createWebTransaction(url: string, handle: mixed): void;
  declare function createBackgroundTransaction(name: string, group: ?string, handle: mixed): void;// TODO type group and handle
  declare function endTransaction(): void;
  declare function createTracer(name: string, callback: (error: ?Error, result: mixed) => void): void; // TODO type callback result

  declare function recordMetric(name: string, value: mixed): void;
  declare function incrementMetric(name: string, amount?: number): void;

  declare function recordCustomEvent(eventType: string, attributes: {}): void;
  declare function addCustomParameter(name: string, value: mixed): void;
  declare function addCustomParameters(params: { [string]: mixed }): void;
  declare function getBrowserTimingHeader(): any;// TODO type return
  declare function setIgnoreTransaction(ignored: boolean): void;
  declare function noticeError(error: mixed, customParameters?: {}): void;
  declare function shutdown(options?: {}, callback?: (error: ?Error, result: mixed) => void): void;// TODO type callback result
}
