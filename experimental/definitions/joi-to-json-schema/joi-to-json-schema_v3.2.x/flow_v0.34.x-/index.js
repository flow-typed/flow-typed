declare type joiToJsonSchema$json = {
  [string]: boolean | string | number | joiToJsonSchema$json
};

declare type joiToJsonSchema$joiToJsonSchema = (
  schema: Object,
  transformer: ?(joiToJsonSchema$json) => joiToJsonSchema$json
) => joiToJsonSchema$json;

declare module "joi-to-json-schema" {
  declare module.exports: joiToJsonSchema$joiToJsonSchema;
}
