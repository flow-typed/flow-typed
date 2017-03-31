declare class Knex$Transaction mixins Knex$QueryBuilder, events$EventEmitter, Promise {
  commit(connection?: any, value?: any): Promise<any>;
  rollback(): Promise<any>;
  savepoint(connection?: any): Promise<any>;
}

declare type Knex$QueryBuilderFn = (qb: Knex$QueryBuilder) => Knex$QueryBuilder;

declare class Knex$QueryBuilder mixins Promise {
  select(key?: string[]): this;
  select(...key: string[]): this;
  timeout(ms: number, options?: { cancel: bool }): this;
  column(key: string[]): this;
  column(...key: string[]): this;
  with(alias: string, w: string|Knex$QueryBuilderFn): this;
  withSchema(schema: string): this;
  returning(column: string): this;
  returning(...columns: string[]): this;
  returning(columns: string[]): this;
  as(name: string): this;
  transacting(trx: ?Knex$Transaction): this;
  where(builder: Knex$QueryBuilderFn): this;
  where(column: string, value: any): this;
  where(column: string, operator: string, value: any): this;
  whereNot(builder: Knex$QueryBuilderFn): this;
  whereNot(column: string, value: any): this;
  whereNot(column: string, operator: string, value: any): this;
  whereIn(column: string, values: any[]): this;
  whereNotIn(column: string, values: any[]): this;
  whereNull(column: string): this;
  whereNotNull(column: string): this;
  whereExists(column: string): this;
  whereNotExists(column: string): this;
  whereBetween(column: string, range: number[]): this;
  whereNotBetween(column: string, range: number[]): this;
  whereRaw(raw: any): this;
  orWhere(builder: Knex$QueryBuilderFn): this;
  orWhere(column: string, value: any): this;
  orWhere(column: string, operator: string, value: any): this;
  orWhereNot(builder: Knex$QueryBuilderFn): this;
  orWhereNot(column: string, value: any): this;
  orWhereNot(column: string, operator: string, value: any): this;
  orWhereIn(column: string, values: any[]): this;
  orWhereNotIn(column: string, values: any[]): this;
  orWhereNull(column: string): this;
  orWhereNotNull(column: string): this;
  orWhereExists(column: string): this;
  orWhereNotExists(column: string): this;
  orWhereBetween(column: string, range: number[]): this;
  orWhereNotBetween(column: string, range: number[]): this;
  orWhereRaw(raw: any): this;
  innerJoin(table: string, c1: string, operator: string, c2: string): this;
  innerJoin(table: string, c1: string, c2: string): this;
  innerJoin(builder: Knex$QueryBuilder, c1?: string, c2?: string): this;
  innerJoin(table: string, builder: Knex$QueryBuilderFn): this;
  leftJoin(table: string, c1: string, operator: string, c2: string): this;
  leftJoin(table: string, c1: string, c2: string): this;
  leftJoin(builder: Knex$QueryBuilder): this;
  leftJoin(table: string, builder: Knex$QueryBuilderFn): this;
  leftOuterJoin(table: string, c1: string, operator: string, c2: string): this;
  leftOuterJoin(table: string, c1: string, c2: string): this;
  leftOuterJoin(table: string, builder: Knex$QueryBuilderFn): this;
  rightJoin(table: string, c1: string, operator: string, c2: string): this;
  rightJoin(table: string, c1: string, c2: string): this;
  rightJoin(table: string, builder: Knex$QueryBuilderFn): this;
  rightOuterJoin(table: string, c1: string, operator: string, c2: string): this;
  rightOuterJoin(table: string, c1: string, c2: string): this;
  rightOuterJoin(table: string, builder: Knex$QueryBuilderFn): this;
  outerJoin(table: string, c1: string, operator: string, c2: string): this;
  outerJoin(table: string, c1: string, c2: string): this;
  outerJoin(table: string, builder: Knex$QueryBuilderFn): this;
  fullOuterJoin(table: string, c1: string, operator: string, c2: string): this;
  fullOuterJoin(table: string, c1: string, c2: string): this;
  fullOuterJoin(table: string, builder: Knex$QueryBuilderFn): this;
  crossJoin(column: string, c1: string, c2: string): this;
  crossJoin(column: string, c1: string, operator: string, c2: string): this;
  crossJoin(table: string, builder: Knex$QueryBuilderFn): this;
  joinRaw(sql: string, bindings?: mixed[]): this;
  distinct(): this;
  groupBy(column: string): this;
  groupByRaw(): this;
  orderBy(column: string, direction?: 'desc' | 'asc'): this;
  orderByRaw(): this;
  offset(offset: number): this;
  limit(limit: number): this;
  having(column: string, operator: string, value: mixed): this;
  union(): this;
  unionAll(): this;
  count(column?: string): this;
  countDistinct(column?: string): this;
  min(column?: string): this;
  max(column?: string): this;
  sum(column?: string): this;
  sumDistinct(column?: string): this;
  avg(column?: string): this;
  avgDistinct(column?: string): this;
  pluck(column: string): this;
  first(): this;
  from(table: string): this;
  from(builder: Knex$QueryBuilderFn|Knex$Knex|Knex$QueryBuilder): this;

  insert(): this;
  del(): this;
  delete(): this;
  update(): this;
  returning(columns: string[]): this;
}

declare class Knex$Knex mixins Knex$QueryBuilder, Promise {
  static (config: Knex$Config): Knex$Knex;
  static QueryBuilder: typeof Knex$QueryBuilder;
  $call: (tableName: string) => Knex$QueryBuilder;
  raw(sqlString: string): any;
  client: any;
  destroy(): Promise<void>;

}

declare type Knex$PostgresConfig = {
  client?: 'pg',
  connection?: {
    host?: string,
    user?: string,
    password?: string,
    database?: string,
    charset?: string,
  },
  searchPath?: string,
}
declare type Knex$MysqlConfig = {
  client?: 'mysql',
  connection?: {
    host?: string,
    user?: string,
    password?: string,
    database?: string,
  },
}
declare type Knex$SqliteConfig = {
  client?: 'sqlite3',
  connection?: {
    filename?: string,
  }
}
declare type Knex$Config = Knex$PostgresConfig | Knex$MysqlConfig | Knex$SqliteConfig;

declare module 'knex' {
  declare type Error = {
    name: string,
    length: number,
    severity: string,
    code: string,
    detail: string,
    hint?: string,
    position?: any,
    intenralPosition?: any,
    internalQuery?: any,
    where?: any,
    schema: string,
    table: string,
    column?: any,
    dataType?: any,
    constraint?: string,
    file: string,
    line: string,
    routine: string,
  }
  declare var exports: typeof Knex$Knex;
}
