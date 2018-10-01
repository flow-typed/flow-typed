declare module "yamljs" {
  declare type Load = (path: string) => mixed;
  declare type Parse = (yaml: string) => mixed;
  declare type Stringify = (
    obj: mixed,
    inline?: number,
    spaces?: number
  ) => string;

  declare export default {
    load: Load,
    parse: Parse,
    stringify: Stringify
  }
}
