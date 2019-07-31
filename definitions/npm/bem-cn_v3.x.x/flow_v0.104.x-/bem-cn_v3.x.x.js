declare module 'bem-cn' {
  declare type Mod = { [mod: string]: string | boolean, ... };
  declare type State = { [state: string]: boolean, ... };
  declare type Mix = string | string[] | BlockItem;
  declare type SetupOptions = {|
    ns?: string,
    el: string,
    mod: string,
    modValue: string,
    classMap?: { [string]: string, ... },
  |};

  declare type BlockItem = {
    (): string,
    (el: string): BlockItem,
    (mod: Mod): BlockItem,
    (el: string, mod: Mod): BlockItem,
    has(State): BlockItem,
    is(State): BlockItem,
    mix(...args: Mix[]): BlockItem,
    state(State): BlockItem,
    split(separator?: string, limit?: number): BlockItem,
    toString(): string,
    ...
  };

  declare type Block = (b: string) => BlockItem;
  declare type Setup = (options: SetupOptions) => Block;

  declare export var block: Block;
  declare export var setup: Setup;
  declare export default Block;
}
