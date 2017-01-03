/**
 * Flowtype definitions for blob-stream
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
function BlobStream(): BlobStream$IBlobStreamdeclare type BlobStream$IBlobStream = {
    toBlob(type?: string): Blob,
    toBlobURL(type?: string): string
}
declare module 'blob-stream' {
    declare module.exports: typeof BlobStream
}