// @flow
/**
 * Flowtype definitions for openpgp
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'util' {

    /**
     * Convert an array of integers(0.255) to a string
     * @param bin An array of (binary) integers to convert
     */
    declare     function bin2str(bin: Array<number>): string

    /**
     * Calculates a 16bit sum of a string by adding each character codes modulus 65535
     * @param text string to create a sum of
     */
    declare     function calc_checksum(text: string): number

    /**
     * Convert a string of utf8 bytes to a native javascript string
     * @param utf8 A valid squence of utf8 bytes
     */
    declare     function decode_utf8(utf8: string): string

    /**
     * Convert a native javascript string to a string of utf8 bytes
     * param str The string to convert
     */
    declare     function encode_utf8(str: string): string

    /**
     * Return the algorithm type as string
     */
    declare     function get_hashAlgorithmString(): string

    /**
     * Get native Web Cryptography api. The default configuration is to use the api when available. But it can also be deactivated with config.useWebCrypto
     */
    declare     function getWebCrypto(): Object

    /**
     * Create binary string from a hex encoded string
     * @param str Hex string to convert
     */
    declare     function hex2bin(str: string): string

    /**
     * Creating a hex string from an binary array of integers (0..255)
     * @param str Array of bytes to convert
     */
    declare     function hexidump(str: string): string

    /**
     * Create hexstring from a binary
     * @param str string to convert
     */
    declare     function hexstrdump(str: string): string

    /**
     * Helper function to print a debug message. Debug messages are only printed if
     * @param str string of the debug message
     */
    declare     function print_debug(str: string): void

    /**
     * Helper function to print a debug message. Debug messages are only printed if
     * @param str string of the debug message
     */
    declare     function print_debug_hexstr_dump(str: string): void

    /**
     * Shifting a string to n bits right
     * @param value The string to shift
     * @param bitcount Amount of bits to shift (MUST be smaller than 9)
     */
    declare     function shiftRight(value: string, bitcount: number): string

    /**
     * Convert a string to an array of integers(0.255)
     * @param str string to convert
     */
    declare     function str2bin(str: string): Array<number >

        /**
         * Convert a string to a Uint8Array
         * @param str string to convert
         */
        declare     function str2Uint8Array(str: string): Uint8Array

    /**
     * Convert a Uint8Array to a string. This currently functions the same as bin2str.
     * @param bin An array of (binary) integers to convert
     */
    declare     function Uint8Array2str(bin: Uint8Array): string
}