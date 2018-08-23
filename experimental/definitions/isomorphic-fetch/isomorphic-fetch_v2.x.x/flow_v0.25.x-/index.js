
declare module 'isomorphic-fetch' {
    declare module.exports: (input: string | Request | URL, init?: RequestOptions) => Promise<Response>;
}
