
declare module 'node-fetch' {
    declare module.exports: (input: string | Request, init?: RequestOptions) => Promise<Response>;
}
