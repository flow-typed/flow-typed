/**
 * Flowtype definitions for inversify-binding-decorators
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$inversifyBindingDecorators: {
    autoProvide: typeof inversifyBindingDecorators$autoProvide,
    makeProvideDecorator: typeof inversifyBindingDecorators$makeProvideDecorator,
    makeFluentProvideDecorator: typeof inversifyBindingDecorators$makeFluentProvideDecorator,
}
declare export type interfaces$ProvideInSyntax<T>= {
    inSingletonScope(): interfaces$ProvideWhenOnSyntax<T >
} & interfaces$ProvideDoneSyntax


declare export interface interfaces$ProvideDoneSyntax<T>{
    done(): (target: any) => any
}

declare export type interfaces$ProvideOnSyntax<T>= {
    onActivation(
        fn: (context: undefined.Context, injectable: T) => T): interfaces$ProvideWhenSyntax<T >
} & interfaces$ProvideDoneSyntax


declare export type interfaces$ProvideInWhenOnSyntax<T>= {} & interfaces$ProvideInSyntax & interfaces$ProvideWhenSyntax & interfaces$ProvideOnSyntax


declare export type interfaces$ProvideWhenOnSyntax<T>= {} & interfaces$ProvideWhenSyntax & interfaces$ProvideOnSyntax


declare export type interfaces$ProvideWhenSyntax<T>= {
    when(
        constraint: (request: undefined.Request) => boolean): interfaces$ProvideOnSyntax<T>,
    whenTargetNamed(name: string): interfaces$ProvideOnSyntax<T>,
    whenTargetTagged(tag: string, value: any): interfaces$ProvideOnSyntax<T>,
    whenInjectedInto(parent: (Function | string)): interfaces$ProvideOnSyntax<T>,
    whenParentNamed(name: string): interfaces$ProvideOnSyntax<T>,
    whenParentTagged(tag: string, value: any): interfaces$ProvideOnSyntax<T>,
    whenAnyAncestorIs(ancestor: (Function | string)): interfaces$ProvideOnSyntax<T>,
    whenNoAncestorIs(ancestor: (Function | string)): interfaces$ProvideOnSyntax<T>,
    whenAnyAncestorNamed(name: string): interfaces$ProvideOnSyntax<T>,
    whenAnyAncestorTagged(tag: string, value: any): interfaces$ProvideOnSyntax<T>,
    whenNoAncestorNamed(name: string): interfaces$ProvideOnSyntax<T>,
    whenNoAncestorTagged(tag: string, value: any): interfaces$ProvideOnSyntax<T>,
    whenAnyAncestorMatches(
        constraint: (request: undefined.Request) => boolean): interfaces$ProvideOnSyntax<T>,
    whenNoAncestorMatches(
        constraint: (request: undefined.Request) => boolean): interfaces$ProvideOnSyntax<T >
} & interfaces$ProvideDoneSyntax


declare export function inversifyBindingDecorators$autoProvide(kernel: undefined.Kernel, ...modules: any[]): void

declare export function inversifyBindingDecorators$makeProvideDecorator(
    kernel: undefined.Kernel): (serviceIdentifier: undefined.ServiceIdentifier<any>) => (target: any) => any

declare export function inversifyBindingDecorators$makeFluentProvideDecorator(
    kernel: undefined.Kernel): (
    serviceIdentifier: undefined.ServiceIdentifier<any>) => interfaces$ProvideInWhenOnSyntax<any>declare module 'inversify-binding-decorators' {
    declare module.exports: typeof inversifyBindingDecorators
}