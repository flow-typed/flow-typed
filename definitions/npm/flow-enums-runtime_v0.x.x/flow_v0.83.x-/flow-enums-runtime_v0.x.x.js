declare module 'flow-enums-runtime' {
  declare type Members = { +[key: string]: string };

  declare type EnumPrototype<T> = {|
    isValid: (x: $Keys<T>) => boolean,
    cast: <V>(x: V) => V | void,
    members: () => Array<$Keys<T>>,
    getName: (value: string) => string,
  |};

  declare type Enum = {|
    <T: Members>(members?: T): {| ...EnumPrototype<T>, ...T |},
    Mirrored: <T: Members>(members: Array<$Keys<T>>) => {| ...Members, ...EnumPrototype<T> |},
  |};

  declare module.exports: Enum;
}
