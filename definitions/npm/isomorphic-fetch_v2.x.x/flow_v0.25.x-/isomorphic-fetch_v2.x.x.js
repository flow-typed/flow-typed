
declare module 'isomorphic-fetch' {
    declare module.exports: (input: string | Request, init?: RequestOptions) => Promise<Response>;
}
