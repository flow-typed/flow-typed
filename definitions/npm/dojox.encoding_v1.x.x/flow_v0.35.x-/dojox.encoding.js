// @flow
/**
 * Flowtype definitions for dojox.encoding
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/compression/splay.html
 * @param n 
 */
declare interface compression$splay {
    (n: any): void
}


/**
 * 
 * @param stream 
 */
declare interface splay$decode {
    (stream: any): number
}


/**
 * 
 * @param value 
 * @param stream 
 */
declare interface splay$encode {
    (value: any, stream: any): any
}


/**
 * 
 */
declare interface splay$reset {
    (): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/compression/splay.html
 * @param n 
 */
declare interface splay$splay {
    (n: any): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/compression/lzw.html
 */
declare interface compression$lzw {

    /**
     * 
     * @param n 
     */
    Decoder(n: any): void,

        /**
         * 
         * @param n 
         */
        Encoder(n: any): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/RSAKey.html
 * @param rngf 
 */
declare class RSAKey {
    constructor(rngf: any): this;

    /**
     * Return the PKCS#1 RSA decryption of "ctext".
     * @param ctext an even-length hex string
     */
    decrypt(ctext: String): any;

    /**
     * 
     * @param text 
     */
    encrypt(text: any): any;

    /**
     * Generate a new random private key B bits long, using public expt E
     * @param B 
     * @param E 
     */
    generate(B: any, E: any): void;

    /**
     * Set the private key fields N, e, d and CRT params from hex strings
     * @param N 
     * @param E 
     * @param D 
     */
    setPrivate(N: any, E: any, D: any): void;

    /**
     * Set the private key fields N, e, d and CRT params from hex strings
     * @param N 
     * @param E 
     * @param D 
     * @param P 
     * @param Q 
     * @param DP 
     * @param DQ 
     * @param C 
     */
    setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;

    /**
     * Set the public key fields N and e from hex strings
     * @param N 
     * @param E 
     */
    setPublic(N: any, E: any): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/RSAKey-ext.html
 * @param rngf 
 */
declare class RSAKey_ext {
    constructor(rngf: any): this;

    /**
     * Return the PKCS#1 RSA decryption of "ctext".
     * @param ctext an even-length hex string
     */
    decrypt(ctext: String): any;

    /**
     * 
     * @param text 
     */
    encrypt(text: any): any;

    /**
     * Generate a new random private key B bits long, using public expt E
     * @param B 
     * @param E 
     */
    generate(B: any, E: any): void;

    /**
     * Set the private key fields N, e, d and CRT params from hex strings
     * @param N 
     * @param E 
     * @param D 
     */
    setPrivate(N: any, E: any, D: any): void;

    /**
     * Set the private key fields N, e, d and CRT params from hex strings
     * @param N 
     * @param E 
     * @param D 
     * @param P 
     * @param Q 
     * @param DP 
     * @param DQ 
     * @param C 
     */
    setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;

    /**
     * Set the public key fields N and e from hex strings
     * @param N 
     * @param E 
     */
    setPublic(N: any, E: any): void
}

declare module '_base' {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.RSAKey.html
     * @param rngf 
     */
    declare class RSAKey {
        constructor(rngf: any): this;

        /**
         * Return the PKCS#1 RSA decryption of "ctext".
         * @param ctext an even-length hex string
         */
        decrypt(ctext: String): any;

        /**
         * 
         * @param text 
         */
        encrypt(text: any): any;

        /**
         * Generate a new random private key B bits long, using public expt E
         * @param B 
         * @param E 
         */
        generate(B: any, E: any): void;

        /**
         * Set the private key fields N, e, d and CRT params from hex strings
         * @param N 
         * @param E 
         * @param D 
         */
        setPrivate(N: any, E: any, D: any): void;

        /**
         * Set the private key fields N, e, d and CRT params from hex strings
         * @param N 
         * @param E 
         * @param D 
         * @param P 
         * @param Q 
         * @param DP 
         * @param DQ 
         * @param C 
         */
        setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;

        /**
         * Set the public key fields N and e from hex strings
         * @param N 
         * @param E 
         */
        setPublic(N: any, E: any): void
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.cipherModes.html
     * 
    Enumeration for various cipher modes.
    */
    declare interface cipherModes {

        /**
         * 
         */
        CBC: number,

            /**
             * 
             */
            CFB: number,

            /**
             * 
             */
            CTR: number,

            /**
             * 
             */
            ECB: number,

            /**
             * 
             */
            OFB: number,

            /**
             * 
             */
            PCBC: number
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.outputTypes.html
     * 
    Enumeration for input and output encodings.
    */
    declare interface outputTypes {

        /**
         * 
         */
        Base64: number,

            /**
             * 
             */
            Hex: number,

            /**
             * 
             */
            Raw: number,

            /**
             * 
             */
            String: number
    }
}



/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA1.html
 * 
Computes the SHA1 digest of the data, and returns the result according to output type.
 * @param data 
 * @param outputType Optional
*/
declare interface digests$SHA1 {
    (data: String, outputType?: Object): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/MD5.html
 * 
computes the digest of data, and returns the result according to type outputType
 * @param data 
 * @param outputType Optional
*/
declare interface digests$MD5 {
    (data: String, outputType?: Object): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA224.html
 * @param data 
 * @param outputType Optional
 */
declare interface digests$SHA224 {
    (data: String, outputType?: number): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA256.html
 * @param data 
 * @param outputType Optional
 */
declare interface digests$SHA256 {
    (data: String, outputType?: number): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA384.html
 * @param data 
 * @param outputType Optional
 */
declare interface digests$SHA384 {
    (data: String, outputType?: number): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/SHA512.html
 * @param data 
 * @param outputType Optional
 */
declare interface digests$SHA512 {
    (data: String, outputType?: number): void
}

declare module '_sha_32' {

}


declare module '_base' {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.RSAKey.html
     * @param rngf 
     */
    declare class RSAKey {
        constructor(rngf: any): this;

        /**
         * Return the PKCS#1 RSA decryption of "ctext".
         * @param ctext an even-length hex string
         */
        decrypt(ctext: String): any;

        /**
         * 
         * @param text 
         */
        encrypt(text: any): any;

        /**
         * Generate a new random private key B bits long, using public expt E
         * @param B 
         * @param E 
         */
        generate(B: any, E: any): void;

        /**
         * Set the private key fields N, e, d and CRT params from hex strings
         * @param N 
         * @param E 
         * @param D 
         */
        setPrivate(N: any, E: any, D: any): void;

        /**
         * Set the private key fields N, e, d and CRT params from hex strings
         * @param N 
         * @param E 
         * @param D 
         * @param P 
         * @param Q 
         * @param DP 
         * @param DQ 
         * @param C 
         */
        setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;

        /**
         * Set the public key fields N and e from hex strings
         * @param N 
         * @param E 
         */
        setPublic(N: any, E: any): void
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.cipherModes.html
     * 
    Enumeration for various cipher modes.
    */
    declare interface cipherModes {

        /**
         * 
         */
        CBC: number,

            /**
             * 
             */
            CFB: number,

            /**
             * 
             */
            CTR: number,

            /**
             * 
             */
            ECB: number,

            /**
             * 
             */
            OFB: number,

            /**
             * 
             */
            PCBC: number
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.outputTypes.html
     * 
    Enumeration for input and output encodings.
    */
    declare interface outputTypes {

        /**
         * 
         */
        Base64: number,

            /**
             * 
             */
            Hex: number,

            /**
             * 
             */
            Raw: number,

            /**
             * 
             */
            String: number
    }
}



/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/digests/_sha-64.html
 */
declare interface digests$_sha_64 {

    /**
     * 
     */
    outputTypes: Object,

        /**
         * 
         * @param msg 
         * @param length 
         * @param hash 
         * @param depth 
         */
        digest(msg: any, length: any, hash: any, depth: any): any[],

        /**
         * 
         * @param s 
         */
        stringToUtf8(s: any): any,

        /**
         * 
         * @param wa 
         */
        toBase64(wa: any): any,

        /**
         * 
         * @param wa 
         */
        toHex(wa: any): any,

        /**
         * 
         * @param s 
         */
        toWord(s: any): any
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/crypto/_base.html
 */
declare interface encoding$_base {

    /**
     * 
     */
    Blowfish: Object,

        /**
         * Enumeration for various cipher modes.
         */
        cipherModes: Object,

        /**
         * Enumeration for input and output encodings.
         */
        outputTypes: Object,

        /**
         * 
         */
        SimpleAES: Object,

        /**
         * 
         */
        RSAKey(): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/bits.html
 */
declare interface encoding$bits {

    /**
     * 
     * @param buffer 
     * @param width 
     */
    InputStream(buffer: any, width: any): void,

        /**
         * 
         */
        OutputStream(): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/ascii85.html
 */
declare interface encoding$ascii85 {

    /**
     * decodes the input string back to array of numbers
     * @param input the input string to decode
     */
    decode(input: String): void,

        /**
         * encodes input data in ascii85 string
         * @param input an array of numbers (0-255) to encode
         */
        encode(input: any[]): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/base64.html
 */
declare interface encoding$base64 {

    /**
     * Convert a base64-encoded string to an array of bytes
     * @param str 
     */
    decode(str: String): void,

        /**
         * Encode an array of bytes as a base64-encoded string
         * @param ba 
         */
        encode(ba: number[]): void
}


/**
 * Permalink: http://dojotoolkit.org/api/1.9/dojox/encoding/easy64.html
 */
declare interface encoding$easy64 {

    /**
     * decodes the input string back to array of numbers
     * @param input the input string to decode
     */
    decode(input: String): void,

        /**
         * encodes input data in easy64 string
         * @param input an array of numbers (0-255) to encode
         */
        encode(input: any[]): void
}
declare module 'dojox/encoding/_base' {
    declare     var exp: undefined._base;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/ascii85' {
    declare     var exp: undefined.ascii85;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/base64' {
    declare     var exp: undefined.base64;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/bits' {
    declare     var exp: undefined.bits;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/easy64' {
    declare     var exp: undefined.easy64;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/compression/splay' {
    declare     var exp: undefined.splay;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/compression/lzw' {
    declare     var exp: undefined.lzw;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/crypto/_base' {
    declare     var exp: undefined._base;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/crypto/_base.RSAKey' {
    declare     var exp: undefined.RSAKey;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/crypto/_base.cipherModes' {
    declare     var exp: undefined.cipherModes;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/crypto/_base.outputTypes' {
    declare     var exp: undefined.outputTypes;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/crypto/RSAKey' {
    declare     var exp: undefined.RSAKey;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/crypto/RSAKey-ext' {
    declare     var exp: undefined.RSAKey_ext;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/MD5' {
    declare     var exp: undefined.MD5;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/SHA1' {
    declare     var exp: undefined.SHA1;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/SHA224' {
    declare     var exp: undefined.SHA224;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/SHA512' {
    declare     var exp: undefined.SHA512;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/SHA256' {
    declare     var exp: undefined.SHA256;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/SHA384' {
    declare     var exp: undefined.SHA384;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/_base' {
    declare     var exp: undefined._base;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/_base.outputTypes' {
    declare     var exp: undefined.outputTypes;
    declare module.exports: typeof exp
}
declare module 'dojox/encoding/digests/_sha-64' {
    declare     var exp: undefined._sha_64;
    declare module.exports: typeof exp
}