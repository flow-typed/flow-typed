
declare module 'isomorphic-unfetch' {
    declare module.exports: (input: string | Request | URL, init?: RequestOptions) => Promise<Response>;
}
