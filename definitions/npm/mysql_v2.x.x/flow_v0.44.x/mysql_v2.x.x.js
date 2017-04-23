// TODO: Events on event emitters
// TODO: Ssl structure type in $npm$mysql$ConnectionOptions
// TODO: PoolNamespace internal structure
// TODO: Packets internal structure

declare type $npm$mysql$ConnectionOptions = {
  host?: string,
  port?: number,
  localAddress?: string,
  socketPath?: string,
  user: string,
  password: string,
  database?: string,
  charset?: string,
  timezone?: string,
  connectTimeout?: number,
  stringifyObjects?: boolean,
  insecureAuth?: boolean,
  typeCast?: boolean,
  queryFormat?: (query: string, values: ?mixed, timezone: string) => string,
  supportBigNumbers?: boolean,
  bigNumberStrings?: boolean,
  dateStrings?: boolean | Array<string>,
  debug?: boolean | Array<string>, // Array form contains ids of packets for logging
  trace?: boolean,
  multipleStatements?: boolean,
  flags?: string,
  ssl?: string | Object
};

declare type $npm$mysql$QueryOptions = {
  sql: string,
  typeCast?: boolean | (field: Object, next: Function) => any,
  nestTables?: boolean | string, // string form is a separator used to produce column names
  values?: Array<mixed>,
  timeout?: number
} | string;

declare type $npm$mysql$QueryResults = Array<Object> & {
  insertId?: string | number,
  affectedRows?: number,
  changedRows?: number
};

declare type $npm$mysql$QueryField = {
  name: string,
  type: string,
  length: number,
  table: string,
  db: string
}

declare type $npm$mysql$QueryCallback = (error: ?Error, results: $npm$mysql$QueryResults, fields?: Array<$npm$mysql$QueryField>) => *;

declare class $npm$mysql$Query extends events$EventEmitter {
  // readableStreamOptions declared in Flow /lib/node.js
  stream(options?: readableStreamOptions): stream$Readable;
}

declare class $npm$mysql$Connection extends events$EventEmitter {
  threadId: number;
  connect(callback?: (error: ?Error) => *): void;

  release(): void;
  destroy(): void;

  end(callback?: (error: ?Error) => *): void;

  query(sql: $npm$mysql$QueryOptions, values?: Array<mixed>, callback?: $npm$mysql$QueryCallback): $npm$mysql$Query;
  query(sql: $npm$mysql$QueryOptions, callback?: $npm$mysql$QueryCallback): $npm$mysql$Query;

  changeUser(options: {
    user?: string,
    password?: string,
    charset?: string,
    database?: string
  }, callback: (error: ?Error) => *): void;

  beginTransaction(options: $npm$mysql$QueryOptions, callback: $npm$mysql$QueryCallback): void;
  beginTransaction(callback: $npm$mysql$QueryCallback): void;
  commit(options: $npm$mysql$QueryOptions, callback: $npm$mysql$QueryCallback): void;
  commit(callback: $npm$mysql$QueryCallback): void;
  rollback(options: $npm$mysql$QueryOptions, callback: $npm$mysql$QueryCallback): void;
  rollback(callback: $npm$mysql$QueryCallback): void;

  ping(options: $npm$mysql$QueryOptions, callback: $npm$mysql$QueryCallback): void;
  ping(callback: $npm$mysql$QueryCallback): void;

  escapeId(val: mixed, forbidQualified?: boolean): string;
  escape(val: mixed, stringifyObjects?: boolean, timeZone: string): string;
  format(sql: string, valus: Array<mixed>): string;
};

declare class $npm$mysql$Pool extends events$EventEmitter {
  getConnection(callback: (error: ?Error) => *): void;
  end(callback?: (error: ?Error) => *): void;
  query(sql: $npm$mysql$QueryOptions, values?: Array<mixed>, callback?: $npm$mysql$QueryCallback): $npm$mysql$Query;
  query(sql: $npm$mysql$QueryOptions, callback?: $npm$mysql$QueryCallback): $npm$mysql$Query;

  escapeId(val: mixed, forbidQualified?: boolean): string;
  escape(val: mixed, stringifyObjects?: boolean, timeZone: string): string;
}

declare type $npm$mysql$PoolOptions = $npm$mysql$ConnectionOptions & {
  acquireTimeout?: number,
  connectionLimit?: number,
  waitForConnections?: boolean,
  queueLimit?: number
};

declare type $npm$mysql$PoolClusterSelector = 'RR' | 'ORDER' | 'RANDOM';

declare type $npm$mysql$PoolClusterOptions = {
  defaultSelector?: $npm$mysql$PoolClusterSelector,
  canRetry?: boolean,
  removeNodeErrorCount?: number,
  restoreNodeTimeout?: number
}

declare class $npm$mysql$PoolCluster extends events$EventEmitter {
  add(config: $npm$mysql$PoolOptions | string): void;
  add(name: string, config: $npm$mysql$PoolOptions | string): void;
  remove(name: string): void;

  getConnection(pattern: string | RegExp, selector: $npm$mysql$PoolClusterSelector, callback: (error: ?Error, connection?: $npm$mysql$Connection) => *): void;
  getConnection(pattern: string | RegExp, callback: (error: ?Error, connection?: $npm$mysql$Connection) => *): void;
  getConnection(callback: (error: ?Error, connection?: $npm$mysql$Connection) => *): void;

  // Truth to be told, of returns not a Pool, but PoolNamespace instance but it is the same for the most part
  of(pattern: string | RegExp, selector?: $npm$mysql$PoolClusterSelector): $npm$mysql$Pool;

  end(callback?: (error: ?Error) => *): void;
}

declare module 'mysql' {
  declare export type Connection = $npm$mysql$Connection;
  declare export type Pool = $npm$mysql$Pool;
  declare export type PoolCluster = $npm$mysql$PoolCluster;

  declare function createConnection(options: $npm$mysql$ConnectionOptions | string): $npm$mysql$Connection;
  declare function createPool(options: $npm$mysql$PoolOptions | string): $npm$mysql$Pool;
  declare function createPoolCluster(options?: $npm$mysql$PoolClusterOptions): $npm$mysql$PoolCluster;

  declare function escapeId(val: mixed, forbidQualified?: boolean): string;
  declare function escape(val: mixed, stringifyObjects?: boolean, timeZone: string): string;
  declare function format(sql: string, valus: Array<mixed>): string;
}
