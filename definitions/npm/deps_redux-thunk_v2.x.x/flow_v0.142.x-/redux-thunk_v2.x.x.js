declare module 'redux-thunk' {
  import type { Middleware } from 'redux';

  declare export type Thunk = Middleware<any, any> & {|
    withExtraArgument(arg: $NonMaybeType<mixed>): Middleware<any, any>,
  |};

  declare module.exports: Thunk;
}
