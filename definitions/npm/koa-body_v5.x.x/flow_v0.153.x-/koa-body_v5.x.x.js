declare module '@@formidable' {
  declare type File = any;
}

declare module 'koa-body' {
  import type { Context, Middleware } from 'koa';
  import type { File } from '@@formidable';

  declare type KoaBodyFormidableOptions = {|
    /**
     * {Integer} Limits the amount of memory all fields together (except files) can allocate in bytes. If this value is exceeded, an 'error' event is emitted. The default size is 20MB.
     */
    maxFileSize?: number,

    /**
     * {Integer} Limits the number of fields that the querystring parser will decode, default 1000
     */
    maxFields?: number,

    /**
     * {Integer} Limits the amount of memory all fields together (except files) can allocate in bytes.
     * If this value is exceeded, an 'error' event is emitted, default 2mb (2 * 1024 * 1024)
     */
    maxFieldsSize?: number,

    /**
     * {String} Sets the directory for placing file uploads in, default os.tmpDir()
     */
    uploadDir?: string,

    /**
     * {Boolean} Files written to uploadDir will include the extensions of the original files, default false
     */
    keepExtensions?: boolean,

    /**
     * {String} If you want checksums calculated for incoming files, set this to either 'sha1' or 'md5', default false
     */
    hashAlgorithm?: string,

    /**
     * {Boolean} Multiple file uploads or no, default true
     */
    multiples?: boolean,

    /**
     * {Function} Special callback on file begin. The function is executed directly by formidable.
     * It can be used to rename files before saving them to disk. See https://github.com/felixge/node-formidable#filebegin
     */
    onFileBegin?: (name: string, file: File) => void;
  |};

  declare type KoaBodyOptions = {|
    /**
     * {Boolean} Patch request body to Node's ctx.req, default false
     *
     * Note: You can patch request body to Node or Koa in same time if you want.
     */
    patchNode?: boolean,

    /**
     * {Boolean} Patch request body to Koa's ctx.request, default true
     *
     * Note: You can patch request body to Node or Koa in same time if you want.
     */
    patchKoa?: boolean,

    /**
     * {String|Integer} The byte (if integer) limit of the JSON body, default 1mb
     */
    jsonLimit?: string | number,

    /**
     * {String|Integer} The byte (if integer) limit of the form body, default 56kb
     */
    formLimit?: string | number,

    /**
     * {String|Integer} The byte (if integer) limit of the text body, default 56kb
     */
    textLimit?: string | number,

    /**
     * {String} Sets encoding for incoming form fields, default utf-8
     */
    encoding?: string,

    /**
     * {Boolean} Parse multipart bodies, default false
     */
    multipart?: boolean,

    /**
     * {Boolean} Parse urlencoded bodies, default true
     */
    urlencoded?: boolean,

    /**
     * {Boolean} Parse text bodies, default true
     */
    text?: boolean,

    /**
     * {Boolean} Parse json bodies, default true
     */
    json?: boolean,

    /**
     * Toggles co-body strict mode; if true, only parses arrays or objects, default true
     */
    jsonStrict?: boolean,

    /**
     * Toggles co-body returnRawBody mode; if true,
     * the raw body will be available using a Symbol for 'unparsedBody'.
     *
     * ```
     // Either:
     const unparsed = require('koa-body/unparsed.js');
     const unparsed = Symbol.for('unparsedBody');

     // Then later, to access:
     ctx.request.body[unparsed]
     ```
     * default false
     */
    includeUnparsed?: boolean,

    /**
     * {Object} Options to pass to the formidable multipart parser
     */
    formidable?: KoaBodyFormidableOptions,

    /**
     * {Function} Custom error handle, if throw an error, you can customize the response - onError(error, context), default will throw
     */
    onError?: (err: Error, ctx: Context) => void,

    /**
     * {Boolean} If enabled, don't parse GET, HEAD, DELETE requests; deprecated.
     *
     * GET, HEAD, and DELETE requests have no defined semantics for the request body,
     * but this doesn't mean they may not be valid in certain use cases.
     * koa-body is strict by default
     *
     * see http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics-19#section-6.3
     */
    strict?: boolean,

    /**
     * {String[]} What HTTP methods to enable body parsing for; should be used in preference to strict mode.
     *
     * GET, HEAD, and DELETE requests have no defined semantics for the request body,
     * but this doesn't mean they may not be valid in certain use cases.
     * koa-body will only parse HTTP request bodies for POST, PUT, and PATCH by default
     *
     * see http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics-19#section-6.3
     */
    parsedMethods?: Array<string>,
  |};

  declare module.exports: (options?: KoaBodyOptions) => Middleware;
}
