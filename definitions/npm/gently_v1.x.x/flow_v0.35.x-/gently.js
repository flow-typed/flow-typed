/**
 * Flowtype definitions for gently
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gently' {
    declare class Gently {
        constructor(): this;
        hijacked: any[];
        expect(
            obj: any,
            method: string,
            stubFn?: (...args: any[]) => any): (...args: any[]) => any;
        expect(
            obj: any,
            method: string,
            count: number,
            stubFn: (...args: any[]) => any): (...args: any[]) => any;
        restore(obj: any, method: string): void;
        hijack(realRequire: (id: string) => any): (id: string) => any;
        stub(location: string, exportsName?: string): any;
        verify(msg?: string): void
    }
}