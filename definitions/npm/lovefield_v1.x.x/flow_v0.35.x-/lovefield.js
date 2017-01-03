/**
 * Flowtype definitions for lovefield
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare
var npm$namespace$lf: {
    bind: typeof lf$bind,
}
declare
export interface lf$Binder {
    getIndex(): number
}

declare
export interface lf$Predicate {}

declare
export interface lf$Row {}

declare type lf$ValueLiteral = string | number | boolean | Date;

declare
export interface lf$PredicateProvider {
    eq(operand: lf$ValueLiteral | schema$Column | lf$Binder): lf$Predicate,
        neq(operand: lf$ValueLiteral | schema$Column | lf$Binder): lf$Predicate,
        lt(operand: lf$ValueLiteral | schema$Column | lf$Binder): lf$Predicate,
        lte(operand: lf$ValueLiteral | schema$Column | lf$Binder): lf$Predicate,
        gt(operand: lf$ValueLiteral | schema$Column | lf$Binder): lf$Predicate,
        gte(operand: lf$ValueLiteral | schema$Column | lf$Binder): lf$Predicate,
        match(operand: RegExp | lf$Binder): lf$Predicate,
        between(
            from: lf$ValueLiteral | lf$Binder,
            to: lf$ValueLiteral | lf$Binder): lf$Predicate, in (values: lf$Binder | Array<lf$ValueLiteral>): lf$Predicate,
        isNull(): lf$Predicate,
        isNotNull(): lf$Predicate
}

declare
function lf$bind(index: number): lf$Binder

declare
export interface lf$Transaction {
    attach(query: query$Builder): Promise<Array<Object >> ,
        begin(scope: Array<schema$Table>): Promise<void>,
        commit(): Promise<void>,
        exec(queries: Array<query$Builder>): Promise<Array<Array<Object >>> ,
        rollback(): Promise<void >
}

declare
export interface lf$Database {
    close(): void,
        createTransaction(type?: TransactionType): lf$Transaction,
        delete(): query$Delete,
        export (): Promise<Object>,
        getSchema(): schema$Database,
        import (data: Object): Promise<void>,
        insertOrReplace(): query$Insert,
        insert(): query$Insert,
        observe(query: query$Select, callback: Function): void,
        select(...columns: schema$Column[]): query$Select,
        unobserve(query: query$Select, callback: Function): void,
        update(table: schema$Table): query$Update
}

declare
export interface query$Builder {
    bind(...values: any[]): query$Builder,
        exec(): Promise<Array<Object >> ,
        explain(): string,
        toSql(): string
}

declare
export type query$Delete = {
    from(table: schema$Table): query$Delete,
    where(predicate: lf$Predicate): query$Delete
} & query$Builder


declare
export type query$Insert = {
    into(table: schema$Table): query$Insert,
    values(rows: Array<lf$Row>| lf$Binder | Array<lf$Binder>): query$Insert
} & query$Builder


declare
export type query$Select = {
    from(...tables: schema$Table[]): query$Select,
    groupBy(...columns: schema$Column[]): query$Select,
    innerJoin(table: schema$Table, predicate: lf$Predicate): query$Select,
    leftOuterJoin(table: schema$Table, predicate: lf$Predicate): query$Select,
    limit(numberOfRows: lf$Binder | number): query$Select,
    orderBy(column: schema$Column, order?: Order): query$Select,
    skip(numberOfRows: lf$Binder | number): query$Select,
    where(predicate: lf$Predicate): query$Select
} & query$Builder


declare
export type query$Update = {
    set(column: schema$Column, value: any): query$Update,
    where(predicate: lf$Predicate): query$Update
} & query$Builder


declare
export interface raw$BackStore {
    getRawDBInstance(): any,
        getRawTransaction(): any,
        dropTable(tableName: string): Promise<void>,
        addTableColumn(
            tableName: string,
            columnName: string,
            defaultValue: string |
            boolean |
            number |
            Date |
            ArrayBuffer): Promise<void>,
        dropTableColumn(tableName: string, columnName: string): Promise<void>,
        renameTableColumn(tableName: string, oldColumnName: string, newColumnName: string): Promise<void>,
        createRow(payload: Object): lf$Row,
        getVersion(): number,
        dump(): Array<Object >
}


declare
var npm$namespace$schema: {
    create: typeof schema$create,
}
declare
export interface schema$DatabasePragma {
    enableBundledMode: boolean
}

declare
export interface schema$Database {
    close(): void,
        createTransaction(type?: TransactionType): lf$Transaction,
        delete(): query$Delete,
        export (): Promise<Object>,
        getSchema(): schema$Database,
        import (data: Object): Promise<void>,
        insertOrReplace(): query$Insert,
        insert(): query$Insert,
        observe(query: query$Select, callback: Function): void,
        select(...columns: schema$Column[]): query$Select,
        unobserve(query: query$Select, callback: Function): void,
        update(table: schema$Table): query$Update
}

declare
export type schema$Column = {
    as(name: string): schema$Column,
    getName(): string,
    getNormalizedName(): string
} & lf$PredicateProvider


declare
export interface schema$Table {
    as(name: string): schema$Table,
        createRow(value: Object): lf$Row,
        getName(): string
}

declare
export interface schema$ConnectOptions {
    onUpgrade?: (rawDb: raw$BackStore) => Promise<void>,
        storeType?: DataStoreType,
        webSqlDbSize?: number
}

declare
export interface schema$Builder {
    bind(...values: any[]): schema$Builder,
        exec(): Promise<Array<Object >> ,
        explain(): string,
        toSql(): string
}

declare
export interface schema$IndexedColumn {
    autoIncrement: boolean,
        name: string,
        order: Order
}

declare type schema$RawForeignKeySpec = {
    local: string,
    ref: string,
    action: lf$ConstraintAction,
    timing: lf$ConstraintTiming
};

declare
export interface schema$TableBuilder {
    addColumn(name: string, type: lf$Type): schema$TableBuilder,
        addForeignKey(name: string, spec: schema$RawForeignKeySpec): schema$TableBuilder,
        addIndex(
            name: string,
            columns: Array<string>| Array<schema$IndexedColumn>,
            unique?: boolean,
            order?: Order): schema$TableBuilder,
        addNullable(columns: Array<string>): schema$TableBuilder,
        addPrimaryKey(
            columns: Array<string>| Array<schema$IndexedColumn>,
            autoInc?: boolean): schema$TableBuilder,
        addUnique(name: string, columns: Array<string>): schema$TableBuilder
}

declare
function schema$create(dbName: string, dbVersion: number): schema$Builder


declare
var npm$namespace$op: {
    and: typeof op$and,
    not: typeof op$not,
    or: typeof op$or,
}
declare
function op$and(...args: lf$Predicate[]): lf$Predicate

declare
function op$not(operand: lf$Predicate): lf$Predicate

declare
function op$or(...args: lf$Predicate[]): lf$Predicate


declare
var npm$namespace$fn: {
    avg: typeof fn$avg,
    count: typeof fn$count,
    distinct: typeof fn$distinct,
    geomean: typeof fn$geomean,
    max: typeof fn$max,
    min: typeof fn$min,
    stddev: typeof fn$stddev,
    sum: typeof fn$sum,
}
declare
function fn$avg(column: schema$Column): schema$Column

declare
function fn$count(column?: schema$Column): schema$Column

declare
function fn$distinct(column: schema$Column): schema$Column

declare
function fn$geomean(column: schema$Column): schema$Column

declare
function fn$max(column: schema$Column): schema$Column

declare
function fn$min(column: schema$Column): schema$Column

declare
function fn$stddev(column: schema$Column): schema$Column

declare
function fn$sum(column: schema$Column): schema$Columndeclare module 'lf' {
    declare module.exports: typeof lf
}