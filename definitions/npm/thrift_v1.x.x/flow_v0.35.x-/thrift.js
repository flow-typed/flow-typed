/**
 * Flowtype definitions for thrift
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'thrift' {
    declare module 'Thrift' {

        /**
         * Thrift IDL type string to Id mapping.
         * @property  {number}    STOP     - End of a set of fields.
         * @property  {number}    VOID     - No value (only legal for return types).
         * @property  {number}    BOOL     - True/False integer.
         * @property  {number}    BYTE     - Signed 8 bit integer.
         * @property  {number}    I08        - Signed 8 bit integer.
         * @property  {number}    DOUBLE - 64 bit IEEE 854 floating point.
         * @property  {number}    I16        - Signed 16 bit integer.
         * @property  {number}    I32        - Signed 32 bit integer.
         * @property  {number}    I64        - Signed 64 bit integer.
         * @property  {number}    STRING - Array of bytes representing a string of characters.
         * @property  {number}    UTF7     - Array of bytes representing a string of UTF7 encoded characters.
         * @property  {number}    STRUCT - A multifield type.
         * @property  {number}    MAP        - A collection type (map/associative-array/dictionary).
         * @property  {number}    SET        - A collection type (unordered and without repeated values).
         * @property  {number}    LIST     - A collection type (unordered).
         * @property  {number}    UTF8     - Array of bytes representing a string of UTF8 encoded characters.
         * @property  {number}    UTF16    - Array of bytes representing a string of UTF16 encoded characters.
         */
        declare interface Type {
            STOP: number,
                VOID: number,
                BOOL: number,
                BYTE: number,
                I08: number,
                DOUBLE: number,
                I16: number,
                I32: number,
                I64: number,
                STRING: number,
                UTF7: number,
                STRUCT: number,
                MAP: number,
                SET: number,
                LIST: number,
                UTF8: number,
                UTF16: number
        }
        declare     var Type: Type;

        /**
         * Thrift RPC message type string to Id mapping.
         * @property  {number}    CALL            - RPC call sent from client to server.
         * @property  {number}    REPLY         - RPC call normal response from server to client.
         * @property  {number}    EXCEPTION - RPC call exception response from server to client.
         * @property  {number}    ONEWAY        - Oneway RPC call from client to server with no response.
         */
        declare interface MessageType {
            CALL: number,
                REPLY: number,
                EXCEPTION: number,
                ONEWAY: number
        }
        declare     var MessageType: MessageType;

        /**
         * Utility function returning the count of an object's own properties.
         * @param  - Object to test.
         * @returns  number of object's own properties
         */
        declare     function objectLength(obj: Object): number

        /**
         * Utility function to establish prototype inheritance.
         * @param  - Contstructor function to set as derived.
         * @param  - Contstructor function to set as base.
         * @param  - Type name to set as name property in derived prototype.
         */
        declare     function inherits(constructor: Function, superConstructor: Function, name?: string): void

        /**
         * TException is the base class for all Thrift exceptions types.
         */
        declare class TException mixins Error {
            name: string;
            message: string;

            /**
             * Initializes a Thrift TException instance.
             * @param  - The TException message (distinct from the Error message).
             */
            constructor(message: string): this;

            /**
             * Returns the message set on the exception.
             * @returns  exception message
             */
            getMessage(): string
        }

        /**
         * Thrift Application Exception type string to Id mapping.
         * @property  {number}    UNKNOWN                                 - Unknown/undefined.
         * @property  {number}    UNKNOWN_METHOD                    - Client attempted to call a method unknown to the server.
         * @property  {number}    INVALID_MESSAGE_TYPE        - Client passed an unknown/unsupported MessageType.
         * @property  {number}    WRONG_METHOD_NAME             - Unused.
         * @property  {number}    BAD_SEQUENCE_ID                 - Unused in Thrift RPC, used to flag proprietary sequence number errors.
         * @property  {number}    MISSING_RESULT                    - Raised by a server processor if a handler fails to supply the required return result.
         * @property  {number}    INTERNAL_ERROR                    - Something bad happened.
         * @property  {number}    PROTOCOL_ERROR                    - The protocol layer failed to serialize or deserialize data.
         * @property  {number}    INVALID_TRANSFORM             - Unused.
         * @property  {number}    INVALID_PROTOCOL                - The protocol (or version) is not supported.
         * @property  {number}    UNSUPPORTED_CLIENT_TYPE - Unused.
         */
        declare interface TApplicationExceptionType {
            UNKNOWN: number,
                UNKNOWN_METHOD: number,
                INVALID_MESSAGE_TYPE: number,
                WRONG_METHOD_NAME: number,
                BAD_SEQUENCE_ID: number,
                MISSING_RESULT: number,
                INTERNAL_ERROR: number,
                PROTOCOL_ERROR: number,
                INVALID_TRANSFORM: number,
                INVALID_PROTOCOL: number,
                UNSUPPORTED_CLIENT_TYPE: number
        }
        declare     var TApplicationExceptionType: TApplicationExceptionType;

        /**
         * TApplicationException is the exception class used to propagate exceptions from an RPC server back to a calling client.
         */
        declare class TApplicationException mixins TException {
            message: string;
            code: number;

            /**
             * Initializes a Thrift TApplicationException instance.
             * @param  - The TApplicationException message (distinct from the Error message).
             * @param  - The TApplicationExceptionType code.
             */
            constructor(message: string, code?: number): this;

            /**
             * Read a TApplicationException from the supplied protocol.
             * @param  - The input protocol to read from.
             */
            read(input: Object): void;

            /**
             * Write a TApplicationException to the supplied protocol.
             * @param  - The output protocol to write to.
             */
            write(output: Object): void;

            /**
             * Returns the application exception code set on the exception.
             * @returns  exception code
             */
            getCode(): number
        }

        /**
         * The Apache Thrift Transport layer performs byte level I/O between RPC
         * clients and servers. The JavaScript Transport object type uses Http[s]/XHR and is
        the sole browser based Thrift transport. Target servers must implement the http[s]
        transport (see: node.js example server).
        */
        declare class TXHRTransport {
            url: string;
            wpos: number;
            rpos: number;
            useCORS: any;
            send_buf: string;
            recv_buf: string;

            /**
             * If you do not specify a url then you must handle XHR operations on
             * your own. This type can also be constructed using the Transport alias
            for backward compatibility.
             * @param  - The URL to connect to.
             * @param  - Options.
            */
            constructor(url?: string, options?: Object): this;

            /**
             * Gets the browser specific XmlHttpRequest Object.
             * @returns  the browser XHR interface object
             */
            getXmlHttpRequestObject(): Object;

            /**
             * Sends the current XRH request if the transport was created with a URL and
             * the async parameter if false. If the transport was not created with a URL
            or the async parameter is True or the URL is an empty string, the current
            send buffer is returned.
             * @param  - If true the current send buffer is returned.
             * @param  - Optional async completion callback.
             * @returns  Nothing or the current send buffer.
            */
            flush(async: any, callback?: Function): string;

            /**
             * Creates a jQuery XHR object to be used for a Thrift server call.
             * @param  - The Thrift Service client object generated by the IDL compiler.
             * @param  - The message to send to the server.
             * @param  - The function to call if the request succeeds.
             * @param  - The Thrift Service Client receive method for the call.
             * @returns  A new jQuery XHR object.
             */
            jqRequest(client: Object, postData: any, args: Function, recv_method: Function): Object;

            /**
             * Sets the buffer to use when receiving server responses.
             * @param  - The buffer to receive server responses.
             */
            setRecvBuffer(buf: string): void;

            /**
             * Returns true if the transport is open, in browser based JavaScript
             * this function always returns true.
             * @returns  Always True.
             */
            isOpen(): boolean;

            /**
             * Opens the transport connection, in browser based JavaScript
             * this function is a nop.
             */
            open(): void;

            /**
             * Closes the transport connection, in browser based JavaScript
             * this function is a nop.
             */
            close(): void;

            /**
             * Returns the specified number of characters from the response
             * buffer.
             * @param  - The number of characters to return.
             * @returns  Characters sent by the server.
             */
            read(len: number): string;

            /**
             * Returns the entire response buffer.
             * @returns  Characters sent by the server.
             */
            readAll(): string;

            /**
             * Sets the send buffer to buf.
             * @param  - The buffer to send.
             */
            write(buf: string): void;

            /**
             * Returns the send buffer.
             * @returns  The send buffer.
             */
            getSendBuffer(): string
        }
    }

}