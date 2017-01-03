/**
 * Flowtype definitions for passport
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export interface Express$Request {
    authInfo?: any,
        user?: any,
        login(user: any, done: (err: any) => void): void,
        login(user: any, options: Object, done: (err: any) => void): void,
        logIn(user: any, done: (err: any) => void): void,
        logIn(user: any, options: Object, done: (err: any) => void): void,
        logout(): void,
        logOut(): void,
        isAuthenticated(): boolean,
        isUnauthenticated(): boolean
}
declare module 'passport' {
    declare interface passport$Passport {
        use(strategy: passport$Strategy): passport$Passport,
            use(name: string, strategy: passport$Strategy): passport$Passport,
            unuse(name: string): passport$Passport,
            framework(fw: passport$Framework): passport$Passport,
            initialize(options?: {
                userProperty: string
            }): express.Handler,
            session(options?: {
                pauseStream: boolean
            }): express.Handler,
            authenticate(strategy: string, callback?: Function): express.Handler,
            authenticate(strategy: string, options: Object, callback?: Function): express.Handler,
            authenticate(strategies: string[], callback?: Function): express.Handler,
            authenticate(strategies: string[], options: Object, callback?: Function): express.Handler,
            authorize(strategy: string, callback?: Function): express.Handler,
            authorize(strategy: string, options: Object, callback?: Function): express.Handler,
            authorize(strategies: string[], callback?: Function): express.Handler,
            authorize(strategies: string[], options: Object, callback?: Function): express.Handler,
            serializeUser(fn: (user: any, done: (err: any, id: any) => void) => void): void,
            serializeUser<TUser, TID>(fn: (user: TUser, done: (err: any, id: TID) => void) => void): void,
            deserializeUser(fn: (id: any, done: (err: any, user: any) => void) => void): void,
            deserializeUser<TUser, TID>(fn: (id: TID, done: (err: any, user: TUser) => void) => void): void,
            transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void
    }

    declare interface passport$Strategy {
        name?: string,
            authenticate(req: express.Request, options?: Object): void
    }

    declare interface passport$Profile {
        provider: string,
            id: string,
            displayName: string,
            username?: string,
            name?: {
                familyName: string,
                givenName: string,
                middleName?: string
            },
            emails?: {
                value: string,
                type?: string
            }[],
            photos?: {
                value: string
            }[]
    }

    declare interface passport$Framework {
        initialize(passport: passport$Passport, options?: Object): Function,
            authenticate(
                passport: passport$Passport,
                name: string,
                options?: Object,
                callback?: Function): Function,
            authorize(
                passport: passport$Passport,
                name: string,
                options?: Object,
                callback?: Function): Function
    }
    declare var passport: passport$Passport;
    declare module.exports: typeof passport
}