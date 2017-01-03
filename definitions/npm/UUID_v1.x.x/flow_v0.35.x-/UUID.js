// @flow
/**
 * Flowtype definitions for UUID
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'UUID' {
    declare interface UUID {
        intFields: UUIDArray<number>,
            bitFields: UUIDArray<string>,
            hexFields: UUIDArray<string>,
            version: number,
            bitString: string,
            hexString: string,
            urn: string,

            /**
             * Tests if two {@link UUID} objects are equal.
             * @param  
             * @returns  True if two {
             * @link  UUID} objects are equal.
             */
            equals(uuid: UUID): boolean,

            /**
             * Returns UUID string representation.
             * @returns  {
             * @link  UUID#hexString}.
             */
            toString(): string
    }
    declare type UUIDArray<T>= {
        timeLow: string,
        timeMid: string,
        timeHiAndVersion: string,
        clockSeqHiAndReserved: string,
        clockSeqLow: string,
        node: string
    } & Array


    /**
     * The simplest function to get an UUID string.
     * @returns  A version 4 UUID string.
     */
    declare     export function generate(): string

    /**
     * Generates a version 4 {@link UUID}.
     * @returns  A version 4 {
     * @link  UUID} object.
     * @since  3.0
     */
    declare     export function genV4(): UUID

    /**
     * Generates a version 1 {@link UUID}.
     * @returns  A version 1 {
     * @link  UUID} object.
     * @since  3.0
     */
    declare     export function genV1(): UUID

    /**
     * Converts hexadecimal UUID string to an {@link UUID} object.
     * @param  UUID hexadecimal string representation ("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx").
     * @returns  {
     * @link  UUID} object or null.
     * @since  3.0
     */
    declare     export function parse(uuid: string): UUID

    /**
     * Re-initializes version 1 UUID state.
     * @since  3.0
     */
    declare     export function resetState(): void

    /**
     * Reinstalls {@link UUID.generate} method to emulate the interface of UUID.js version 2.x.
     * @since  3.1
     * @deprecated  Version 2.x. compatible interface is not recommended.
     */
    declare     export function makeBackwardCompatible(): void
}