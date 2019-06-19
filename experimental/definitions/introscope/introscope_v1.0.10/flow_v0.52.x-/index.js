declare module 'introscope' {
    // `introscope` is using any type on purpose,
    // some developers require only part of their tests
    // to have strict types.
    // eslint-disable-next-line flowtype/no-weak-types
    declare type AnyScope = { [string]: any };
    declare function introscope(scope: AnyScope): AnyScope => AnyScope;

    declare function scope<Scope: {}>(scope: Scope): ($Shape<Scope>) => Scope;
}
