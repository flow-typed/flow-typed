declare module 'introscope' {
    declare type AnyScope = { [string]: any };
    declare function introscope(scope: AnyScope): AnyScope => AnyScope;

    declare function scope<Scope>(scope: Scope): ($Shape<Scope>) => Scope;
}
