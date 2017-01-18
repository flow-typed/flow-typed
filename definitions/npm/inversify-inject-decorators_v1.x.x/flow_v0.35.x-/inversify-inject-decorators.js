/**
 * Flowtype definitions for inversify-inject-decorators
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface inversifyInjectDecorators$InjectDecorators {
    lazyInject: (
            serviceIdentifier: undefined.ServiceIdentifier<any>) => (proto: any, key: string) => void,
        lazyInjectNamed: (
            serviceIdentifier: undefined.ServiceIdentifier<any>,
            named: string) => (proto: any, key: string) => void,
        lazyInjectTagged: (
            serviceIdentifier: undefined.ServiceIdentifier<any>,
            key: string,
            value: any) => (proto: any, propertyName: string) => void,
        lazyMultiInject: (
            serviceIdentifier: undefined.ServiceIdentifier<any>) => (proto: any, key: string) => void
}
declare module 'inversify-inject-decorators' {
    declare var getDecorators: (kernel: undefined.Kernel) => inversifyInjectDecorators$InjectDecorators;
    declare module.exports: typeof getDecorators
}