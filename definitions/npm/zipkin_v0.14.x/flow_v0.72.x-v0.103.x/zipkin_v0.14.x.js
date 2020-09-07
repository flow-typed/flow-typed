// These are heavily derived from the official zipkin
// Typescript defs: https://github.com/openzipkin/zipkin-js/blob/master/packages/zipkin/index.d.ts
// with various tweaks for handling the nested structure of
// the zipkin exports.

// See notes in various places below for specific oddities,
// warnings, etc.

declare module 'zipkin' {
    declare export interface Context<T> {
        setContext(ctx: T): void;
        getContext(): T;
        scoped<V>(callback: () => V): V;
        letContext<V>(ctx: T, callback: () => V): V;
    }

    declare export interface $Sampler {
        shouldSample(traceId: TraceId): option$Option<boolean>;
    }

    declare class sampler$Sampler implements $Sampler {
        constructor(evaluator: (traceId: TraceId) => boolean): this;
        shouldSample(traceId: TraceId): option$Option<boolean>;
    }

    declare class sampler$CountingSampler implements $Sampler {
        constructor(sampleRate?: number): this;
        shouldSample(traceId: TraceId): option$Option<boolean>;
    }

    declare export class Tracer {
        constructor({ ctxImpl: Context<TraceId>, recorder: Recorder, sampler?: $Sampler, traceId128Bit?: boolean, localServiceName?: string, localEndpoint?: model$Endpoint }): this;
        id: TraceId;

        scoped<V>(callback: () => V): V;
        local<V>(name: string, callback: () => V): V;
        createRootId(isSampled?: option$Option<boolean>, isDebug?: boolean): TraceId;
        createChildId(): TraceId;
        letId<V>(traceId: TraceId, callback: () => V): V;
        setId(traceId: TraceId): void;
        recordAnnotation(annotation: $Annotation): void;
        recordMessage(message: string): void;
        recordServiceName(serviceName: string): void;
        recordRpc(name: string): void;
        recordClientAddr(inetAddress: InetAddress): void;
        recordServerAddr(inetAddress: InetAddress): void;
        recordLocalAddr(inetAddress: InetAddress): void;
        recordBinary(key: string, value: boolean | string | number): void;
        writeIdToConsole(message: any): void;
    }

    declare export class TraceId {
        +traceId: string;
        +parentId: string;
        +spanId: string;
        +sampled: option$Option<boolean>;
        +flags: number;

        isDebug(): boolean;

        constructor(args?: {
            traceId?: option$Option<string>,
            parentId?: option$Option<string>,
            spanId?: string,
            sampled?: option$Option<boolean>,
            flags?: number
        }): this;

        toString(): string;
    }

    // Restructured to (imho) better capture the intent of
    // zipkin's option type.  There are also some specific
    // adjustments/fixes:
    // - ifPresent returns void. The intended usage, from looking at
    //   how it's used in the zipkin code base, seems to be side-effects.
    // - Fixed flatMap signature. The TS signature is identical to map,
    //   and thus isn't the common definition of flatMap.
    // - getOrElse returns T. The TS defs introduce an extra V type
    //   parameter and then throw it away, which seemed odd for any
    //   case where V != T.
    declare interface option$OptionMethods<T> {
        map<V>(fn: (value: T) => V): option$Option<V>;
        ifPresent<V>(fn: (value: T) => V): void;
        flatMap<V>(fn: (value: T) => option$Option<V>): option$Option<V>;
        getOrElse(fnOrValue: (() => T) | T): T;
        equals(other: option$Option<T>): boolean;
        toString(): string;
    }

    declare interface option$None<T> extends option$OptionMethods<T> {
        type: 'None';
        present: false;
    }

    declare class option$Some<T> implements option$OptionMethods<T> {
        constructor(value: T): this;
        type: 'Some'; 
        present: true;

        map<V>(fn: (value: T) => V): option$Option<V>;
        ifPresent<V>(fn: (value: T) => V): void;
        flatMap<V>(fn: (value: T) => option$Option<V>): option$Option<V>;
        getOrElse(fnOrValue: (() => T) | T): T;
        equals(other: option$Option<T>): boolean;
        toString(): string;
    }

    declare type option$Option<T> = option$None<T> | option$Some<T>

    declare class model$Endpoint {
        constructor({ serviceName?: string, ipv4?: string, port?: number }): this;

        setServiceName(serviceName: string): void;
        setIpv4(ipv4: string): void;
        setPort(port: number): void;

        isEmpty(): boolean;
    }

    declare interface model$Annotation {
        timestamp: number;
        value: string;
    }

    declare class model$Span {
        +traceId: string;
        +parentId?: string;
        +id: string;
        +name?: string;
        +kind?: string;
        +timestamp?: number;
        +duration?: number;
        +localEndpoint?: model$Endpoint;
        +remoteEndpoint?: model$Endpoint;
        +annotations: model$Annotation[];
        +tags: { [ key: string ]: string };
        +debug: boolean;
        +shared: boolean;

        constructor(traceId: TraceId): this;
        setName(name: string): void;
        setKind(kind: string): void;
        setTimestamp(timestamp: number): void;
        setDuration(duration: number): void;
        setLocalEndpoint(endpoint: model$Endpoint): void;
        setRemoteEndpoint(endpoint: model$Endpoint): void;
        addAnnotation(timestamp: number, value: string): void;
        putTag(key: string, value: string): void;
        setDebug(debug: boolean): void;
        setShared(shared: boolean): void;
    }

    declare export interface JsonEncoder {
        encode(span: model$Span): string;
    }
    
    declare export class InetAddress {
        constructor(addr: string): this;
        static getLocalAddress(): this;

        ipv4(): string;
        toInt(): number;
    }

    declare export interface $Annotation {
        +annotationType: string;
    }

    declare class Annotation$ClientSend implements $Annotation {
        +annotationType: string;
    }
    declare class Annotation$ClientRecv implements $Annotation {
        +annotationType: string;
    }
    declare class Annotation$ServerSend implements $Annotation {
        +annotationType: string;
    }
    declare class Annotation$ServerRecv implements $Annotation {
        +annotationType: string;
    }
    declare class Annotation$LocalOperationStart implements $Annotation {
        constructor(name: string): this;
        +annotationType: string;
        name: string;
    }
    declare class Annotation$LocalOperationStop implements $Annotation {
        +annotationType: string;
    }

    declare class Annotation$Message implements $Annotation {
        constructor(message: string): this;
        +annotationType: string;
        message: string;
    }

    declare class Annotation$ServiceName implements $Annotation {
        constructor(serviceName: string): this;
        +annotationType: string;
        serviceName: string;
    }

    declare class Annotation$Rpc implements $Annotation {
        constructor(name: string): this;
        +annotationType: string;
        name: string;
    }

    declare class Annotation$ClientAddr implements $Annotation {
        constructor(args: { host: InetAddress, port: number }): this;
        +annotationType: string;
    }

    declare class Annotation$ServerAddr implements $Annotation {
        constructor(args: { serviceName: string, host?: InetAddress, port?: number }): this;
        +annotationType: string;
        serviceName: string;
        host: InetAddress;
        port: number;
    }

    declare class Annotation$LocalAddr implements $Annotation {
        constructor(args?: { host?: InetAddress, port?: number }): this;
        +annotationType: string;
        host: InetAddress;
        port: number;
    }

    declare class Annotation$BinaryAnnotation implements $Annotation {
        constructor(key: string, value: boolean | string | number): this;
        +annotationType: string;
        key: string;
        value: string;
    }

    declare export var HttpHeaders: {
        TraceId: string;
        SpanId: string;
        ParentSpanId: string;
        Sampled: string;
        Flags: string;
    };

    declare export interface Record {
        traceId: TraceId;
        timestamp: number;
        annotation: $Annotation;
    }

    /** The Tracer sends each annotation to a Recorder implementation */
    declare export interface Recorder {
        record(rec: Record): void;
    }

    declare export class BatchRecorder implements Recorder {
        constructor({ logger: Logger, timeout?: number }): this;
        record: (rec: Record) => void;
    }

    declare export class ConsoleRecorder implements Recorder {
        constructor(logger?: (message: string) => void): this;
        record: (rec: Record) => void;
    }

    declare export class ExplicitContext implements Context<TraceId> {
        setContext(ctx: TraceId): void;
        getContext(): TraceId;
        scoped<V>(callback: () => V): V;
        letContext<V>(ctx: TraceId, callback: () => V): V;
    }

    declare export type ZipkinHeaders = {
      'X-B3-TraceId': string,
      'X-B3-SpanId': string,
      'X-B3-ParentSpanId'?: string,
      'X-B3-Sampled'?: '1' | '0'
    }

    declare type $GenericHeaders = { [string]: string }
    declare export type RequestZipkinHeaders<T = {}, H = $GenericHeaders> = T & {
        headers: H & ZipkinHeaders
    };

    declare class Instrumentation$HttpServer {
      constructor({ tracer: Tracer, port: number }): this;

      recordRequest(
        method: string,
        requestUrl: string,
        readHeader: <T> (header: string) => option$Option<T>
      ): TraceId;
      recordResponse(traceId: TraceId, statusCode: string, error?: Error): void;
    }

    declare class Instrumentation$HttpClient {
      constructor({ tracer: Tracer, remoteServiceName?: string }): this;

      recordRequest<T>(
        request: T,
        url: string,
        method: string
      ): T;
      recordResponse(traceId: TraceId, statusCode: string): void;
      recordError(traceId: TraceId, error: Error): void;
    }

    /** The Logger (or transport) is what the Recorder uses to send spans to Zipkin.
    * @see https://github.com/openzipkin/zipkin-js/#transports Official transport implementations
    */
    declare export interface Logger {
        logSpan(span: model$Span): void;
    }

    declare export function createNoopTracer(): Tracer;
    declare export function randomTraceId(): string;

    // The TS defs provide a nested parametric *type* option.Option<T>
    // which seems impossible in flow.  So, exporting this at the
    // top level for now.
    declare export type $Option<T> = option$Option<T>;

    // The option "namespace" is tricky to export.
    // AFAICT, there's no way to export an *object* containing a
    // parameterized class, i.e. there's no way to export an options
    // *object* that contains a parameterized Some class.
    // Exporting a parametric class with a static property that is
    // the parametric class seems to work.
    declare export class option<T> {
        static Some: Class<option$Some<T>>;
        static None: option$None<T>;
        static isOptional(data: any): boolean;
        static verifyIsOptional(data: any): void; // Throw error if not a valid option
        static verifyIsNotOptional(data: any): void; // Throw error if a valid option
        static fromNullable<V>(nullable: ?V): option$Option<V>;
    }

    declare export var Annotation: {
        ClientSend: Class<Annotation$ClientSend>,
        ClientRecv: Class<Annotation$ClientRecv>,
        ServerSend: Class<Annotation$ServerSend>,
        ServerRecv: Class<Annotation$ServerRecv>,
        LocalOperationStart: Class<Annotation$LocalOperationStart>,
        LocalOperationStop: Class<Annotation$LocalOperationStop>,
        Message: Class<Annotation$Message>,
        ServiceName: Class<Annotation$ServiceName>,
        Rpc: Class<Annotation$Rpc>,
        ClientAddr: Class<Annotation$ClientAddr>,
        ServerAddr: Class<Annotation$ServerAddr>,
        LocalAddr: Class<Annotation$LocalAddr>,
        BinaryAnnotation: Class<Annotation$BinaryAnnotation>,
    }

    declare export var sampler: {
        Sampler: Class<sampler$Sampler>,
        CountingSampler: Class<sampler$CountingSampler>,
        neverSample: TraceId => boolean,
        alwaysSample: TraceId => boolean
    }

    declare export var Request: {
        addZipkinHeaders: <T, H>(req: T & { headers?: $GenericHeaders }, traceId: TraceId) => RequestZipkinHeaders<T, H>
    }

    declare export var Instrumentation: {
        HttpServer: Class<Instrumentation$HttpServer>,
        HttpClient: Class<Instrumentation$HttpClient>
    }

    declare export var model: {
        Endpoint: Class<model$Endpoint>,
        Annotation: Class<model$Annotation>,
        Span: Class<model$Span>
    }
    
    declare export var jsonEncoder: {
        JSON_V1: JsonEncoder,
        JSON_V2: JsonEncoder
    }

    declare export function parseRequestUrl (requestUrl: string): { host: string, path: string };
}
