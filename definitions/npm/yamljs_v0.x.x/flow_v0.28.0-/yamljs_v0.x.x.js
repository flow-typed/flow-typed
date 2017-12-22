declare module "yamljs" {
  declare type Parse = (yaml: string) => mixed;
  declare type Stringify = (
    obj: mixed,
    inline?: number,
    spaces?: number
  ) => string;

  declare export default {
    parse: Parse,
    stringify: Stringify
  }
}
