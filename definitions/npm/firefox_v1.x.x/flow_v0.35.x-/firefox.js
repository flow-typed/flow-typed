/**
 * Flowtype definitions for firefox
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Navigator {
    mozApps: Apps
}
declare interface Apps {
    install(url: string, receipts?: any[]): DOMRequest<App>,
        getSelf(): DOMRequest<App>,
        getInstalled(): DOMRequest<App[]>,
        checkInstalled(url: string): DOMRequest<App >
}
declare interface DOMRequest<T>{
    onsuccess: Function,
    onerror: Function,
    readyState: string,
    result: T,
    error: DOMError
}
declare interface App {
    manifest: any,
        manifestURL: string,
        origin: string,
        installOrigin: string,
        installTime: number,
        receipts: any[],
        launch(): void,
        checkForUpdate(): DOMRequest<any >
}