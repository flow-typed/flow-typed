declare module 'react-native-simple-store' {
  declare type Key = string | Array<Array<any>>;
  declare type Value = string | boolean | Object | Array<any>;

  declare type SimpleStore = {
    get: (key: Key)=> Promise<any>,
    save: (key: Key, value: Value)=> Promise<any>,
    update: (key: string, value: Value)=> Promise<any>,
    keys: ()=> Promise<any>,
    push: (key: string, value: Value)=> Promise<any>,
    delete: (key: string | string[])=> Promise<any>,
  }

  declare module.exports: SimpleStore;
}
