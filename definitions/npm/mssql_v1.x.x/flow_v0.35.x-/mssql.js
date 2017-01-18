/**
 * Flowtype definitions for mssql
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'mssql' {
    declare type sqlTypeWithNoParams = {
        type: sqlTypeFactoryWithNoParams
    };
    declare type sqlTypeWithLength = {
        type: sqlTypeFactoryWithLength,
        length: number
    };
    declare type sqlTypeWithScale = {
        type: sqlTypeFactoryWithScale,
        scale: number
    };
    declare type sqlTypeWithPrecisionScale = {
        type: sqlTypeFactoryWithPrecisionScale,
        precision: number,
        scale: number
    };
    declare type sqlTypeWithTvpType = {
        type: sqlTypeFactoryWithTvpType,
        tvpType: any
    };
    declare type sqlTypeFactoryWithNoParams = () => sqlTypeWithNoParams;
    declare type sqlTypeFactoryWithLength = (length?: number) => sqlTypeWithLength;
    declare type sqlTypeFactoryWithScale = (scale?: number) => sqlTypeWithScale;
    declare type sqlTypeFactoryWithPrecisionScale = (precision?: number, scale?: number) => sqlTypeWithPrecisionScale;
    declare type sqlTypeFactoryWithTvpType = (tvpType: any) => sqlTypeWithTvpType;
    declare export var VarChar: sqlTypeFactoryWithLength;
    declare export var NVarChar: sqlTypeFactoryWithLength;
    declare export var Text: sqlTypeFactoryWithNoParams;
    declare export var Int: sqlTypeFactoryWithNoParams;
    declare export var BigInt: sqlTypeFactoryWithNoParams;
    declare export var TinyInt: sqlTypeFactoryWithNoParams;
    declare export var SmallInt: sqlTypeFactoryWithNoParams;
    declare export var Bit: sqlTypeFactoryWithNoParams;
    declare export var Float: sqlTypeFactoryWithNoParams;
    declare export var Numeric: sqlTypeFactoryWithPrecisionScale;
    declare export var Decimal: sqlTypeFactoryWithPrecisionScale;
    declare export var Real: sqlTypeFactoryWithNoParams;
    declare export var Date: sqlTypeFactoryWithNoParams;
    declare export var DateTime: sqlTypeFactoryWithNoParams;
    declare export var DateTime2: sqlTypeFactoryWithScale;
    declare export var DateTimeOffset: sqlTypeFactoryWithScale;
    declare export var SmallDateTime: sqlTypeFactoryWithNoParams;
    declare export var Time: sqlTypeFactoryWithScale;
    declare export var UniqueIdentifier: sqlTypeFactoryWithNoParams;
    declare export var SmallMoney: sqlTypeFactoryWithNoParams;
    declare export var Money: sqlTypeFactoryWithNoParams;
    declare export var Binary: sqlTypeFactoryWithNoParams;
    declare export var VarBinary: sqlTypeFactoryWithLength;
    declare export var Image: sqlTypeFactoryWithNoParams;
    declare export var Xml: sqlTypeFactoryWithNoParams;
    declare export var Char: sqlTypeFactoryWithLength;
    declare export var NChar: sqlTypeFactoryWithLength;
    declare export var NText: sqlTypeFactoryWithNoParams;
    declare export var TVP: sqlTypeFactoryWithTvpType;
    declare export var UDT: sqlTypeFactoryWithNoParams;
    declare export var Geography: sqlTypeFactoryWithNoParams;
    declare export var Geometry: sqlTypeFactoryWithNoParams;
    declare export var TYPES: {
        VarChar: sqlTypeFactoryWithLength,
        NVarChar: sqlTypeFactoryWithLength,
        Text: sqlTypeFactoryWithNoParams,
        Int: sqlTypeFactoryWithNoParams,
        BigInt: sqlTypeFactoryWithNoParams,
        TinyInt: sqlTypeFactoryWithNoParams,
        SmallInt: sqlTypeFactoryWithNoParams,
        Bit: sqlTypeFactoryWithNoParams,
        Float: sqlTypeFactoryWithNoParams,
        Numeric: sqlTypeFactoryWithPrecisionScale,
        Decimal: sqlTypeFactoryWithPrecisionScale,
        Real: sqlTypeFactoryWithNoParams,
        Date: sqlTypeFactoryWithNoParams,
        DateTime: sqlTypeFactoryWithNoParams,
        DateTime2: sqlTypeFactoryWithScale,
        DateTimeOffset: sqlTypeFactoryWithScale,
        SmallDateTime: sqlTypeFactoryWithNoParams,
        Time: sqlTypeFactoryWithScale,
        UniqueIdentifier: sqlTypeFactoryWithNoParams,
        SmallMoney: sqlTypeFactoryWithNoParams,
        Money: sqlTypeFactoryWithNoParams,
        Binary: sqlTypeFactoryWithNoParams,
        VarBinary: sqlTypeFactoryWithLength,
        Image: sqlTypeFactoryWithNoParams,
        Xml: sqlTypeFactoryWithNoParams,
        Char: sqlTypeFactoryWithLength,
        NChar: sqlTypeFactoryWithLength,
        NText: sqlTypeFactoryWithNoParams,
        TVP: sqlTypeFactoryWithTvpType,
        UDT: sqlTypeFactoryWithNoParams,
        Geography: sqlTypeFactoryWithNoParams,
        Geometry: sqlTypeFactoryWithNoParams
    };
    declare export var MAX: number;
    declare export var fix: boolean;
    declare export var Promise: any;
    declare type IMap = {
        register(jstype: any, sql: any): void
    } & Array

    declare export var map: IMap;
    declare export var DRIVERS: string[];
    declare type recordSet = any;
    declare type IIsolationLevel = number;
    declare export var ISOLATION_LEVEL: {
        READ_UNCOMMITTED: IIsolationLevel,
        READ_COMMITTED: IIsolationLevel,
        REPEATABLE_READ: IIsolationLevel,
        SERIALIZABLE: IIsolationLevel,
        SNAPSHOT: IIsolationLevel
    };
    declare export interface IOptions {
        encrypt: boolean
    }
    declare export interface IPool {
        min: number,
            max: number,
            idleTimeoutMillis: number
    }
    declare export var pool: IPool;
    declare export interface config {
        driver?: string,
            user?: string,
            password?: string,
            server: string,
            port?: number,
            domain?: string,
            database: string,
            connectionTimeout?: number,
            requestTimeout?: number,
            stream?: boolean,
            options?: IOptions,
            pool?: IPool
    }
    declare export class Connection mixins events.EventEmitter {
        connected: boolean;
        connecting: boolean;
        driver: string;
        constructor(config: config, callback?: (err?: any) => void): this;
        connect(): Promise<void>;
        connect(callback: (err: any) => void): void;
        close(): Promise<void>;
        close(callback: (err: any) => void): void
    }
    declare export class ConnectionError mixins Error {
        constructor(message: string, code?: any): this;
        name: string;
        message: string;
        code: string
    }
    declare class columns {
        add(name: string, type: any, options: any): void
    }
    declare class rows {
        add(...row: any[]): void
    }
    declare export class Table {
        create: boolean;
        columns: columns;
        rows: rows;
        constructor(tableName: string): this
    }
    declare interface IRequestParameters {
        [name: string]: {
            name: string,
            type: any,
            io: number,
            value: any,
            length: number,
            scale: number,
            precision: number,
            tvpType: any
        }
    }
    declare export class Request mixins events.EventEmitter {
        connection: Connection;
        transaction: Transaction;
        pstatement: PreparedStatement;
        parameters: IRequestParameters;
        verbose: boolean;
        multiple: boolean;
        canceled: boolean;
        stream: any;
        constructor(connection?: Connection): this;
        constructor(transaction: Transaction): this;
        constructor(preparedStatement: PreparedStatement): this;
        execute(procedure: string): Promise<recordSet>;
        execute<Entity>(
            procedure: string,
            callback: (
                err?: any,
                recordsets?: Entity[],
                returnValue?: any,
                rowsAffected?: number) => void): void;
        input(name: string, value: any): void;
        input(name: string, type: any, value: any): void;
        output(name: string, type: any, value?: any): void;
        pipe(stream: NodeJS.WritableStream): void;
        query(command: string): Promise<void>;
        query<Entity>(command: string): Promise<Entity[]>;
        query(
            command: string,
            callback: (err?: any, recordset?: any, rowsAffected?: number) => void): void;
        query<Entity>(
            command: string,
            callback: (err?: any, recordset?: Entity[]) => void): void;
        batch(batch: string): Promise<recordSet>;
        batch<Entity>(batch: string): Promise<Entity[]>;
        batch(batch: string, callback: (err?: any, recordset?: any) => void): void;
        batch<Entity>(
            batch: string,
            callback: (err?: any, recordset?: Entity[]) => void): void;
        bulk(table: Table): Promise<void>;
        bulk(table: Table, callback: (err: any, rowCount: any) => void): void;
        cancel(): void
    }
    declare export class RequestError mixins Error {
        constructor(message: string, code?: any): this;
        name: string;
        message: string;
        code: string
    }
    declare export class Transaction mixins events.EventEmitter {
        connection: Connection;
        isolationLevel: IIsolationLevel;
        constructor(connection?: Connection): this;
        begin(isolationLevel?: IIsolationLevel): Promise<void>;
        begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
        commit(): Promise<void>;
        commit(callback: (err?: any) => void): void;
        rollback(): Promise<void>;
        rollback(callback: (err?: any) => void): void
    }
    declare export class TransactionError mixins Error {
        constructor(message: string, code?: any): this;
        name: string;
        message: string;
        code: string
    }
    declare export class PreparedStatement mixins events.EventEmitter {
        connection: Connection;
        transaction: Transaction;
        prepared: boolean;
        statement: string;
        parameters: IRequestParameters;
        multiple: boolean;
        stream: any;
        constructor(connection?: Connection): this;
        input(name: string, type: any): void;
        output(name: string, type: any): void;
        prepare(statement?: string): Promise<void>;
        prepare(statement?: string, callback?: (err?: any) => void): void;
        execute(values: Object): Promise<recordSet>;
        execute<Entity>(values: Object): Promise<Entity[]>;
        execute(
            values: Object,
            callback: (err: any, recordSet: recordSet, rowsAffected: number) => void): void;
        execute<Entity>(
            values: Object,
            callback: (err: any, recordSet: Entity[]) => void): void;
        unprepare(): Promise<void>;
        unprepare(callback: (err?: any) => void): void
    }
    declare export class PreparedStatementError mixins Error {
        constructor(message: string, code?: any): this;
        name: string;
        message: string;
        code: string
    }
}