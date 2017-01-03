/**
 * Flowtype definitions for passport-facebook
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'passport-facebook' {
    declare type Profile = {
        gender: string,
        profileUrl: string,
        username: string,
        _raw: string,
        _json: any
    }
    declare interface IStrategyOption {
        clientID: string,
            clientSecret: string,
            callbackURL: string,
            scopeSeparator?: string,
            enableProof?: boolean,
            profileFields?: string[]
    }
    declare class Strategy mixins passport.Strategy {
        constructor(options: IStrategyOption, verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void) => void): this;
        name: string;
        authenticate: (req: express.Request, options?: Object) => void
    }
}