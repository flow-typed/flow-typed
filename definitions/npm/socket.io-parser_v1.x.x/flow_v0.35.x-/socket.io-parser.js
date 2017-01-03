// @flow
/**
 * Flowtype definitions for socket.io-parser
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'socket.io-parser' {
    declare type Parser$Packet = {
        type: number,
        data: any,
        id: number
    };

    declare type Parser$EncodedPacket = string | Buffer | ArrayBuffer | Blob;

    declare     var types: string[];

    declare     var CONNECT: number;

    declare     var DISCONNECT: number;

    declare     var EVENT: number;

    declare     var ACK: number;

    declare     var ERROR: number;

    declare     var BINARY_EVENT: number;

    declare     var BINARY_ACK: number;

    declare class Encoder {
        encode(
            packet: Parser$Packet,
            callback: (encodedPackets: Parser$EncodedPacket[]) => void): void
    }

    declare class Decoder {
        on(event: string, callback: (decodedPacket: Parser$Packet) => void): void;
        add(encodedPacket: Parser$EncodedPacket): void;
        destroy(): void
    }
    declare module.exports: typeof Parser
}