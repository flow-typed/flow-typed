/**
 * Flowtype definitions for passport-local-mongoose
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'mongoose' {
    declare export type PassportLocalDocument = {
        setPassword(password: string, cb: (err: any, res: any) => void): void,
        authenticate(password: string, cb: (err: any, res: any, error: any) => void): void
    } & Document

    declare type PassportLocalModel<T>= {
        authenticate(): (
            username: string,
            password: string,
            cb: (err: any, res: T, error: any) => void) => void,
        serializeUser(): (user: PassportLocalModel<T>, cb: (err: any) => void) => void,
        deserializeUser(): (username: string, cb: (err: any) => void) => void,
        register(user: PassportLocalModel<T>, password: string, cb: (err: any) => void): void,
        findByUsername(username: string, selectHashSaltFields: boolean, cb: (err: any) => void): any,
        createStrategy(): passportLocal.Strategy
    } & Model

    declare export interface PassportLocalErrorMessages {
        MissingPasswordError?: string,
            AttemptTooSoonError?: string,
            TooManyAttemptsError?: string,
            NoSaltValueStoredError?: string,
            IncorrectPasswordError?: string,
            IncorrectUsernameError?: string,
            MissingUsernameError?: string,
            UserExistsError?: string
    }
    declare export interface PassportLocalOptions {
        saltlen?: number,
            iterations?: number,
            keylen?: number,
            encoding?: string,
            digestAlgorithm?: string,
            passwordValidator?: (password: string, cb: (err: any) => void) => void,
            usernameField?: string,
            usernameUnique?: boolean,
            usernameQueryFields: Array<string>,
            selectFields?: string,
            populateFields?: string,
            usernameLowerCase?: boolean,
            hashField?: string,
            saltField?: string,
            limitAttempts?: boolean,
            lastLoginField?: string,
            attemptsField?: string,
            interval?: number,
            maxInterval?: number,
            maxAttempts?: number,
            errorMessages?: PassportLocalErrorMessages
    }
    declare export type PassportLocalSchema = {
        plugin(
            plugin: (schema: PassportLocalSchema, options?: PassportLocalOptions) => void,
            options?: PassportLocalOptions): this,
        plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this
    } & Schema

    declare export function model<T>(
        name: string,
        schema?: PassportLocalSchema,
        collection?: string,
        skipInit?: boolean): PassportLocalModel<T >
}
declare module 'passport-local-mongoose' {
    declare var _: (schema: mongoose.Schema, options?: Object) => void;
    declare module.exports: typeof _
}