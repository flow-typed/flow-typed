/**
 * Flowtype definitions for easy-xapi
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export interface Express$Request {
    log: any
}
declare module 'easy-xapi' {
    declare interface InitConfig {
        jSend?: {
            partial: boolean
        }
    }
    declare interface Config {
        root: string,
            port: number,
            name: string,
            xHeaderDefaults?: Object,
            log: {
                name: string,
                level: string
            },
            mount: (app: express.Application) => void
    }
    declare interface Result {
        express: any,
            app: express.Application,
            server: http.Server,
            log: bunyan.Logger,
            listen: () => void
    }
    declare export function init(conf: InitConfig): void
    declare export function create(conf: Config): Result
}