// flow-typed signature: 9ed0f65c3fef605d7b40569f85a56b00
// flow-typed version: <<STUB>>/data.maybe_v1.2.2/flow_v0.35.0

declare module 'data.maybe' {
  declare class IMaybe<T> {
    isNothing: boolean;
    isJust: boolean;
    isEqual(om: IMaybe<T>): boolean;
    toString(): string;
    toJSON(): Object;
    get(): T;
    getOrElse(defaultValue: T): T;
    map<B>(f: (v:T) => B): IMaybe<B>;
    chain<B>(f: (v:T) => IMaybe<B>): IMaybe<B>;
    orElse<B>(f: () => IMaybe<B>): IMaybe<B>;
    cata<B>(patterns: {| Nothing: () => B, Just: (v:T) => B |}): B;
    static Nothing<T>(): IMaybe<T>;
    static Just<T>(value: T): IMaybe<T>;
    static of<T>(value: T): IMaybe<T>;
    static fromNullable(value: ?T): IMaybe<T>;
  }

  declare var exports: typeof IMaybe;
}
