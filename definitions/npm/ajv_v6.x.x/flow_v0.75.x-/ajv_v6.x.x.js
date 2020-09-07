// This definition is based on the official TypeScript definitions from
// the project's repository:
// <https://github.com/epoberezkin/ajv/blob/master/lib/ajv.d.ts>.

declare class $npm$ajv$ValidationError extends Error {
  message: string;
  errors: Array<$npm$ajv$ErrorObject>;
  ajv: true;
  validation: true;

  constructor(errors: Array<$npm$ajv$ErrorObject>): void;
}

declare class $npm$ajv$MissingRefError extends Error {
  message: string;
  missingRef: string;
  missingSchema: string;

  static message(baseId: string, ref: string): string;

  constructor(baseId: string, ref: string, message?: string): void;
}

declare type $npm$ajv$ErrorObject = {
  keyword: string,
  dataPath: string,
  schemaPath: string,
  params: $npm$ajv$ErrorParameters,
  // Added to validation errors of propertyNames keyword schema
  propertyName?: string,
  // Excluded if messages set to false.
  message?: string,
  // These are added with the `verbose` option.
  schema?: mixed,
  parentSchema?: Object,
  data?: mixed,
};

declare type $npm$ajv$ErrorParameters =
  | {| ref: string |}                  // RefParams
  | {| limit: number |}                // LimitParams
  | {| additionalProperty: string |}   // AdditionalPropertiesParams
  | $npm$ajv$DependenciesParams        // DependenciesParams
  | {| format: string |}               // FormatParams
  | $npm$ajv$ComparisonParams          // ComparisonParams
  | {| multipleOf: number |}           // MultipleOfParams
  | {| pattern: string |}              // PatternParams
  | {| missingProperty: string |}      // RequiredParams
  | {| type: string |}                 // TypeParams
  | {| i: number, j: number |}         // UniqueItemsParams
  | {| keyword: string |}              // CustomParams
  | {| missingPattern: string |}       // PatternRequiredParams
  | {| propertyName: string |}         // PropertyNamesParams
  | {| failingKeyword: string |}       // IfParams
  | {| caseIndex: number |}            // SwitchParams
  | {}                                 // NoParams
  | {| allowedValues: Array<mixed> |}; // EnumParams

declare type $npm$ajv$DependenciesParams = {|
  property: string,
  missingProperty: string,
  depsCount: number,
  deps: string,
|};

declare type $npm$ajv$ComparisonParams = {|
  comparison: string,
  limit: number | string,
  exclusive: boolean,
|};


declare module 'ajv' {

  declare type ErrorObject = $npm$ajv$ErrorObject;

  declare class Ajv {
    static ValidationError: typeof $npm$ajv$ValidationError;
    static MissingRefError: typeof $npm$ajv$MissingRefError;

    static [[call]](options?: Options): Ajv;

    constructor(options?: Options): void;

    validate(
      schemaKeyRef: Object | string | boolean,
      data: mixed,
    ): boolean | Promise<boolean>;

    compile(schema: Object | boolean): ValidateFunction;

    compileAsync(
      chema: Object | boolean,
      meta?: boolean,
      callback?: (err: Error, validate: ValidateFunction) => mixed,
    ): Promise<ValidateFunction>;

    addSchema(schema: Array<Object> | Object, key?: string): Ajv;
    addMetaSchema(schema: Object, key?: string): Ajv;
    validateSchema(schema: Object | boolean): boolean;
    getSchema(keyRef: string): ValidateFunction;
    removeSchema(schemaKeyRef?: Object | string | RegExp | boolean): Ajv;
    addFormat(name: string, format: FormatValidator | FormatDefinition): Ajv;
    addKeyword(keyword: string, definition: KeywordDefinition): Ajv;
    getKeyword(keyword: string): Object | boolean;
    removeKeyword(keyword: string): Ajv;
    errorsText(errors?: Array<ErrorObject>, options?: ErrorsTextOptions): string;
    errors?: Array<ErrorObject>;
  }

  declare interface ValidateFunction {
    [[call]](
      data: mixed,
      dataPath?: string,
      parentData?: Object | Array<mixed>,
      parentDataProperty?: string | number,
      rootData?: Object | Array<mixed>,
    ): boolean | Promise<boolean>;

    schema?: Object | boolean;
    errors?: ?Array<ErrorObject>;
    refs?: Object;
    refVal?: Array<mixed>;
    root?: ValidateFunction | Object;
    $async?: true;
    source?: Object;
  }

  declare type Options = {|
    $data?: boolean,
    allErrors?: boolean,
    verbose?: boolean,
    jsonPointers?: boolean,
    uniqueItems?: boolean,
    unicode?: boolean,
    format?: string,
    formats?: Object,
    unknownFormats?: true | Array<string> | 'ignore',
    schemas?: Array<Object> | Object,
    schemaId?: '$id' | 'id' | 'auto',
    missingRefs?: true | 'ignore' | 'fail',
    extendRefs?: true | 'ignore' | 'fail',

    loadSchema?: (
      uri: string,
      cb?: (err: Error, schema: Object) => void,
    ) => Promise<Object | boolean>,

    removeAdditional?: boolean | 'all' | 'failing',
    useDefaults?: boolean | 'shared',
    coerceTypes?: boolean | 'array',
    async?: boolean | string,
    transpile?: string | ((code: string) => string),
    meta?: boolean | Object,
    validateSchema?: boolean | 'log',
    addUsedSchema?: boolean,
    inlineRefs?: boolean | number,
    passContext?: boolean,
    loopRequired?: number,
    ownProperties?: boolean,
    multipleOfPrecision?: boolean | number,
    errorDataPath?: string,
    messages?: boolean,
    sourceCode?: boolean,
    processCode?: (code: string) => string,
    cache?: Object,
  |};

  declare type FormatValidator =
   | string
   | RegExp
   | ((data: string) => boolean | Promise<boolean>);

  declare type NumberFormatValidator = ((data: number) => boolean | Promise<boolean>);

  declare type NumberFormatDefinition = {
    type: 'number',
    validate: NumberFormatValidator,
    compare?: (data1: number, data2: number) => number,
    async?: boolean,
  };

  declare type StringFormatDefinition = {
    type?: 'string',
    validate: FormatValidator,
    compare?: (data1: string, data2: string) => number,
    async?: boolean,
  };

  // disjoint union
  declare type FormatDefinition = NumberFormatDefinition | StringFormatDefinition;

  declare interface KeywordDefinition {
    type?: string | Array<string>;
    async?: boolean;
    $data?: boolean;
    errors?: boolean | string;
    metaSchema?: Object;
    // schema: false makes validate not to expect schema (ValidateFunction)
    schema?: boolean;
    modifying?: boolean;
    valid?: boolean;
    // one and only one of the following properties should be present
    validate?: SchemaValidateFunction | ValidateFunction;
    compile?: (schema: mixed, parentSchema: Object, it: CompilationContext) => ValidateFunction;
    macro?: (schema: mixed, parentSchema: Object, it: CompilationContext) => Object | boolean;
    inline?: (it: CompilationContext, keyword: string, schema: mixed, parentSchema: Object) => string;
  }

  declare interface CompilationContext {
    level: number;
    dataLevel: number;
    schema: mixed;
    schemaPath: string;
    baseId: string;
    async: boolean;
    opts: Options;
    formats: {[string]: ?FormatDefinition};
    compositeRule: boolean;
    validate: (schema: Object) => boolean;
    util: CompilationUtils;
    self: Ajv;
  }

  declare interface CompilationUtils {
    copy(obj: Object): Object;
    copy<T>(obj: Object, target: T): T;

    toHash(source: Array<string>): {[string]: true};
    equal(obj: mixed, target: mixed): boolean;
    getProperty(key: mixed): string;
    schemaHasRules(schema: mixed, rules: Object): boolean;
    escapeQuotes(str: string): string;
    toQuotedString(str: string): string;
    getData(jsonPointer: string, dataLevel: number, paths: Array<string>): string;
    escapeJsonPointer(str: string): string;
    unescapeJsonPointer(str: string): string;
    escapeFragment(str: string): string;
    unescapeFragment(str: string): string;
  }

  declare interface SchemaValidateFunction {
    [[call]](
      schema: mixed,
      data: mixed,
      parentSchema?: Object,
      dataPath?: string,
      parentData?: Object | Array<mixed>,
      parentDataProperty?: string | number,
      rootData?: Object | Array<mixed>,
    ): boolean | Promise<boolean>;

    errors?: Array<ErrorObject>;
  }

  declare type ErrorsTextOptions = {|
    separator?: string,
    dataVar?: string,
  |};

  declare var $dataMetaSchema: Object;

  declare module.exports: typeof Ajv;
}
