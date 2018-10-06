declare module 'react-native-simple-store' {
  declare type Key = string | Array<Array<any>>;
  declare type Value = string | boolean | Object | Array<any>;

  declare function get(key: Key): Promise<?any>;
  declare function save(key: Key, value: Value): Promise<?any>;
  declare function update(key: string, value: Value): Promise<?any>;
  declare function keys(): Promise<?any>;
  declare function push(key: string, value: Value): Promise<?any>;
}
