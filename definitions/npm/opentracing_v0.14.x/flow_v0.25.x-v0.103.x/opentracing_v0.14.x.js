declare module 'opentracing' {
  // binary_carrier.d.ts
  // `T` is `ArrayLike<number>` in TypeScript, but couldn't find a proper alternative.
  declare class BinaryCarrier<T> {
    buffer: T;
    constructor(buffer: T): this;
  }

  // reference.d.ts
  declare class Reference {
    type(): string;
    referencedContext(): SpanContext;
    constructor(type: string, referencedContext: SpanContext | Span): this;
  }

  // tracer.d.ts
  declare interface SpanOptions {
    childOf?: Span | SpanContext;
    references?: Reference[];
    tags?: {
      [key: string]: any;
    };
    startTime?: number;
  }
  declare class Tracer {
    startSpan(name: string, options?: SpanOptions): Span;
    inject(spanContext: SpanContext | Span, format: string, carrier: any): void;
    extract(format: string, carrier: any): ?SpanContext;
  }

  // span_context.d.ts
  declare class SpanContext {
  }

  // span.d.ts
  declare class Span {
    context(): SpanContext;
    tracer(): Tracer;
    setOperationName(name: string): this;
    setBaggageItem(key: string, value: string): this;
    getBaggageItem(key: string): ?string;
    setTag(key: string, value: any): this;
    addTags(keyValueMap: {
      [key: string]: any;
    }): this;
    log(keyValuePairs: {
      [key: string]: any;
    }, timestamp?: number): this;
    finish(finishTime?: number): void;

    // @deprecated
    logEvent(eventName: string, payload: any): void;
  }

  // mock_tracer/mock_tracer.d.ts
  declare class MockTracer extends Tracer {
    constructor(): this;
    clear(): void;
    report(): MockReport;
  }

  // mock_tracer/mock_span.d.ts
  declare interface DebugInfo {
    uuid: string;
    operation: string;
    millis: [number, number, number];
    tags?: {
      [key: string]: any;
    };
  }
  declare class MockSpan extends Span {
    _finishMs: number;
    _startStack?: string;
    constructor(tracer: MockTracer): this;
    uuid(): string;
    operationName(): string;
    durationMs(): number;
    tags(): {
      [key: string]: any;
    };
    tracer(): Tracer;
    addReference(ref: Reference): void;
    debug(): DebugInfo;
  }

  // mock_tracer/mock_context.d.ts
  declare class MockContext extends SpanContext {
    constructor(span: MockSpan): this;
    span(): MockSpan;
  }

  // mock_tracer/mock_report.d.ts
  declare class MockReport {
    spans: MockSpan[];
    constructor(spans: MockSpan[]): this;
    firstSpanWithTagValue(key: string, val: any): ?MockSpan;
  }

  // ext/tags.d.ts
  declare var Tags: {
    SPAN_KIND: string,
    SPAN_KIND_RPC_CLIENT: string,
    SPAN_KIND_RPC_SERVER: string,
    SPAN_KIND_MESSAGING_PRODUCER: string,
    SPAN_KIND_MESSAGING_CONSUMER: string,
    ERROR: string,
    COMPONENT: string,
    SAMPLING_PRIORITY: string,
    PEER_SERVICE: string,
    PEER_HOSTNAME: string,
    PEER_ADDRESS: string,
    PEER_HOST_IPV4: string,
    PEER_HOST_IPV6: string,
    PEER_PORT: string,
    HTTP_URL: string,
    HTTP_METHOD: string,
    HTTP_STATUS_CODE: string,
    MESSAGE_BUS_DESTINATION: string,
    DB_INSTANCE: string,
    DB_STATEMENT: string,
    DB_TYPE: string,
    DB_USER: string,
  };

  // global_tracer.d.ts
  declare function initGlobalTracer(tracer: Tracer): void;
  declare function globalTracer(): Tracer;

  // constants.d.ts
  declare var FORMAT_BINARY: string;
  declare var FORMAT_TEXT_MAP: string;
  declare var FORMAT_HTTP_HEADERS: string;
  declare var REFERENCE_CHILD_OF: string;
  declare var REFERENCE_FOLLOWS_FROM: string;

  // functions.d.ts
  declare function childOf(spanContext: SpanContext | Span): Reference;
  declare function followsFrom(spanContext: SpanContext): Reference;
}
