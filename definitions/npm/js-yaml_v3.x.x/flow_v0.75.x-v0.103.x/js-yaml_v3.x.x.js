declare module 'js-yaml' {

  declare type Kind = 'sequence' | 'scalar' | 'mapping';

  declare type DumpOptions = {|
    indent?: number,
    skipInvalid?: boolean,
    flowLevel?: number,
    styles?: {[string]: any},
    schema?: Schema,
    sortKeys?: boolean | ((a: any, b: any) => number),
    lineWidth?: number,
    noRefs?: boolean,
    noCompatMode?: boolean,
    condenseFlow?: boolean,
  |};

  declare type LoadOptions = {|
    filename?: string,
    strict?: boolean,
    schema?: Schema,
    json?: boolean,
  |};

  declare type SchemaDefinition = {|
    implicit?: Array<Type>,
    explicit?: Array<Type>,
    include?: Array<Schema>,
  |};

  declare type TypeConstructorOptions = {|
    kind?: Kind,
    resolve?: (data: any) => boolean,
    construct?: (data: any) => any,
    instanceOf?: Object,
    predicate?: string,
    represent?: ((data: Object) => any) | {[string]: (data: Object) => any},
    defaultStyle?: string,
    styleAliases?: {[string]: any},
  |};

  declare class Schema {  // implements SchemaDefinition
    static DEFAULT: ?Schema;

    implicit: Array<Type>;
    explicit: Array<Type>;
    include: Array<Schema>;

    compiledImplicit: Array<Type>;
    compiledExplicit: Array<Type>;
    compiledTypeMap: {[Kind | 'fallback']: {[string]: Type}};

    constructor(definition: SchemaDefinition): this;

    static create(types: Array<Type> | Type): Schema;
    static create(schemas: Array<Schema> | Schema, types: Array<Type> | Type): Schema;
  }

  declare class Type {
    tag: string;
    kind: Kind;
    instanceOf: ?Object;
    predicate: ?string;
    represent: ((data: Object) => any) | {[string]: (data: Object) => any} | null;
    defaultStyle: ?string;
    styleAliases: {[string]: any};

    constructor(tag: string, opts?: TypeConstructorOptions): this;

    resolve(data: any): boolean;

    construct(data: any): any;
  }

  declare class YAMLException extends Error {
    constructor(reason?: any, mark?: any): this;

    toString(compact?: boolean): string;
  }

  declare var CORE_SCHEMA: Schema;
  declare var DEFAULT_FULL_SCHEMA: Schema;
  declare var DEFAULT_SAFE_SCHEMA: Schema;
  declare var FAILSAFE_SCHEMA: Schema;
  declare var JSON_SCHEMA: Schema;
  declare var MINIMAL_SCHEMA: Schema;
  declare var SAFE_SCHEMA: Schema;

  declare function load(input: string, opts?: LoadOptions): mixed;

  declare function safeLoad(input: string, opts?: LoadOptions): mixed;

  declare function loadAll(input: string, output?: void | null, opts?: LoadOptions): Array<mixed>;
  declare function loadAll(input: string, output: (doc: mixed) => void, opts?: LoadOptions): void;

  declare function safeLoadAll(input: string, output?: void | null, opts?: LoadOptions): Array<mixed>;
  declare function safeLoadAll(input: string, output: (doc: mixed) => void, opts?: LoadOptions): void;

  declare function dump(input: mixed, opts?: DumpOptions): string;

  declare function safeDump(input: mixed, opts?: DumpOptions): string;
}
