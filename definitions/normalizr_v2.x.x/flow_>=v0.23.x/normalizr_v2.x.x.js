declare class Normalizr$Schema {
  define(nestedSchema: Object): void;
}
type Normalizr$SchemaOrObject = Normalizr$Schema | Object;

declare module 'normalizr' {
  declare class Normalizr {
    normalize(obj: Object, schema: Normalizr$SchemaOrObject): Object;
    Schema(key: string, options?: Object): Normalizr$Schema;
    arrayOf(schema: Normalizr$SchemaOrObject, options?: Object): Normalizr$Schema;
    valuesOf(schema: Normalizr$SchemaOrObject, options?: Object): Normalizr$Schema;
  }
  declare var exports: Normalizr;
}
