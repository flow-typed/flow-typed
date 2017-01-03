// @flow
/**
 * Flowtype definitions for promisify-supertest
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'promisify-supertest' {


    declare type CallbackHandler = (err: any, res: supertest$Response) => void;
    declare module.exports: typeof supertest

    declare     var npm$namespace$supertest: {
        agent: typeof supertest$agent,
    }
    declare     function supertest$agent(app?: any): supertest$SuperTest

    declare type supertest$SuperTest = {}

    declare type supertest$Test = {
        url: string,
        serverAddress(app: any, path: string): string,
        expect(status: number, callback?: CallbackHandler): this,
        expect(status: number, body: string, callback?: CallbackHandler): this,
        expect(body: string, callback?: CallbackHandler): this,
        expect(body: RegExp, callback?: CallbackHandler): this,
        expect(body: Object, callback?: CallbackHandler): this,
        expect(field: string, val: string, callback?: CallbackHandler): this,
        expect(field: string, val: RegExp, callback?: CallbackHandler): this,
        expect(checker: (res: supertest$Response) => any): this,
        end(callback?: CallbackHandler): this & Promise<supertest$Response >
    }

    declare type supertest$Response = {}
}