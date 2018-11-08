// @flow

import { TraceId, Tracer, model, sampler, type Context, ExplicitContext, BatchRecorder, ConsoleRecorder } from 'zipkin'

// Example ported from https://github.com/openzipkin/zipkin-js/blob/master/packages/zipkin/README.md 
const ctxImpl: Context<TraceId> = new ExplicitContext() 

const tracer1: Tracer = new Tracer({
  ctxImpl,
  recorder: new ConsoleRecorder(),
  sampler: new sampler.CountingSampler(0.01),
  traceId128Bit: true,
  localServiceName: 'test1'
});

const logger = {
    logSpan(s: model.Span): void {}
}

const recorder = new BatchRecorder({ logger })

const tracer2: Tracer = new Tracer({
    ctxImpl,
    recorder,
    sampler: new sampler.Sampler((traceId: TraceId) => true),
    localServiceName: 'test2'
})