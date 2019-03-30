declare module 'autobind-decorator' {
    declare export interface TypedPropertyDescriptor<T> {
      enumerable?: boolean;
      configurable?: boolean;
      writable?: boolean;
      value?: T;
      get?: () => T;
      set?: (value: T) => void;
    }

    declare export type ConstructorFunction = () => void;
    declare export type ClassDecorator = <T: Class<{}> | ConstructorFunction>(target: T) => T;
    declare export type MethodDecorator = <T>(target: {}, propertyKey: string | Symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T>;

    declare var autobind: ClassDecorator & MethodDecorator;

    declare export var boundMethod: MethodDecorator;
    declare export var boundClass: ClassDecorator;

    declare export default typeof autobind;
}
