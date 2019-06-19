// @flow

/**
 * @fileoverview
 * Adapted copy of normalizr's TypeScript type declaration
 * https://github.com/paularmstrong/normalizr/blob/6c5af279cc890a94fb7cde53a32811ccc7c2e28b/index.d.ts
 */

declare module 'normalizr' {
  declare type StrategyFunction = (value: any, parent: any, key: string) => any;
  declare type SchemaFunction = (value: any, parent: any, key: string) => string | number | Symbol;
  declare type MergeFunction = (entityA: any, entityB: any) => any;

  declare class Array {
    constructor(definition: Schema, schemaAttribute?: string | SchemaFunction): void,
    define(definition: Schema): void
  }

  declare type EntityOptions = {
    idAttribute?: string | SchemaFunction,
    mergeStrategy?: MergeFunction,
    processStrategy?: StrategyFunction
  }

  declare class Entity {
    constructor(key: string, definition?: Schema, options?: EntityOptions): void,
    define(definition: Schema): void,
    key: string
  }

  declare class Object {
    constructor(definition: {[key: string]: Schema}): void,
    define(definition: Schema): void
  }

  declare class Union {
    constructor(definition: Schema, schemaAttribute: string | SchemaFunction): void,
    define(definition: Schema): void
  }

  declare class Values {
    constructor(definition: Schema, schemaAttribute?: string | SchemaFunction): void,
    define(definition: Schema): void
  }

  declare export var schema: {
    Array: typeof Array,
    Entity: typeof Entity,
    Object: typeof Object,
    Union: typeof Union,
    Values: typeof Values,
  }
    
  declare export type Schema =
    schema.Array |
    schema.Entity |
    schema.Object |
    schema.Union |
    schema.Values |
    {[key: string]: Schema} |
    [Schema];


  declare type NormalizeResult<Result, Collections> = {|
    result: Result,
    entities: Collections,
  |}

  declare export function normalize<Result, Collections>(raw: $ReadOnlyArray<mixed> | Object, schema: Schema): NormalizeResult<Result, Collections>;
  declare export function denormalize(
    input: mixed,
    schema: Schema,
    entities: mixed
  ): any;
}
