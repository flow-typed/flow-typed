declare module 'base-64' {
  declare module.exports: {|
    /**
     * This function takes a byte string (the input parameter) and encodes it according to base64.
     * The input data must be in the form of a string containing only characters
     * in the range from U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF.
     * The base64.encode() function is designed to be fully compatible
     * with btoa() as described in the HTML Standard.
     * see: https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-btoa
     */
    encode: (input: string) => string,
    /**
     * This function takes a base64-encoded string (the input parameter) and decodes it.
     * The return value is in the form of a string containing only characters in
     * the range from U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF.
     * The base64.decode() function is designed to be fully compatible
     * with atob() as described in the HTML Standard.
     * see: https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-atob
     */
    decode: (input: string) => string,
    version: string,
  |};
}
