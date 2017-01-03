// @flow
/**
 * Flowtype definitions for meteor-persistent-session
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$Session: {
    setTemp: typeof Session$setTemp,
    setPersistent: typeof Session$setPersistent,
    setAuth: typeof Session$setAuth,
    setDefaultTemp: typeof Session$setDefaultTemp,
    setDefaultPersistent: typeof Session$setDefaultPersistent,
    setDefaultAuth: typeof Session$setDefaultAuth,
    makeTemp: typeof Session$makeTemp,
    makePersistent: typeof Session$makePersistent,
    makeAuth: typeof Session$makeAuth,
    clear: typeof Session$clear,
    clearTemp: typeof Session$clearTemp,
    clearPersistent: typeof Session$clearPersistent,
    clearAuth: typeof Session$clearAuth,
}
declare function Session$setTemp(key: string, value: string |
    number |
    boolean |
    any |
    any): boolean

declare function Session$setPersistent(key: string, value: string |
    number |
    boolean |
    any |
    any): boolean

declare function Session$setAuth(key: string, value: string |
    number |
    boolean |
    any |
    any): boolean

declare function Session$setDefaultTemp(key: string, value: EJSONable | any): void

declare function Session$setDefaultPersistent(key: string, value: EJSONable | any): void

declare function Session$setDefaultAuth(key: string, value: EJSONable | any): void

declare function Session$makeTemp(key: string): void

declare function Session$makePersistent(key: string): void

declare function Session$makeAuth(key: string): void

declare function Session$clear(): void

declare function Session$clearTemp(): void

declare function Session$clearPersistent(): void

declare function Session$clearAuth(): void